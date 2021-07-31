#!/bin/env ruby
# frozen_string_literal: true

require 'every_politician_scraper/scraper_data'
require 'pry'

class MemberList
  # details for an individual member
  class Member < Scraped::HTML
    field :name do
      noko.parent.parent.css('.person__name').text.gsub(' MSP', '').tidy
    end

    field :position do
      noko.text.tidy
    end
  end

  # The page listing all the members
  class Members < Scraped::HTML
    field :members do
      container.map { |member| fragment(member => Member).to_h }
    end

    private

    # We want a row for each *role*, not each person
    # TODO: remove the 'cabinet' ID, to include all the ministers too
    def container
      noko.css('#the-scottish-cabinet .person .person__role-link')
    end
  end
end

file = Pathname.new 'html/official.html'
puts EveryPoliticianScraper::FileData.new(file).csv
