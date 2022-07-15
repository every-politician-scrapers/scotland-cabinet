#!/bin/env ruby
# frozen_string_literal: true

require 'every_politician_scraper/scraper_data'
require 'pry'

class MemberList
  class Member
    def name
      noko.parent.parent.css('.person__name').text.gsub(' MSP', '').tidy
    end

    def position
      noko.text.tidy
    end
  end

  class Members
    # We want a row for each *role*, not each person
    # TODO: remove the 'cabinet' ID, to include all the ministers too
    def member_container
      noko.css('#the-scottish-cabinet .person .person__role-link')
    end
  end
end

file = Pathname.new 'official.html'
puts EveryPoliticianScraper::FileData.new(file).csv
