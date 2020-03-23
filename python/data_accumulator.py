import numpy as np
import pandas as pd
import sys
import swifter
from copy import deepcopy

def women_led(company_name, people):
    people_company = people[people['organization'] == company_name]
    if len(people_company) > 0:
        company_women_led = (people_company['gender'] == 'Female').any()
        return company_women_led

    assert("Should have people in the company")

def has_people(company_name, people):
    people_company = people[people['organization'] == company_name]
    return not people_company.empty

def main():
    # Shrink funded_companies
    funded_companies = pd.read_csv("data/funded_companies.csv")
    funded_companies.columns = ['company_name', 'domain', 'country_code',
                             'state_code', 'region', 'city', 'status',
                             'short_description', 'category_list',
                             'category_group_list', 'employee_count',
                             'funding_rounds', 'funding_total_usd',
                             'founded_on', 'first_funding_on',
                             'last_funding_on', 'closed_on', 'email', 'phone',
                             'cb_url', 'twitter_url', 'facebook_url', 'uuid']
    funded_companies = funded_companies[["company_name", "country_code", "state_code", "region", "funding_rounds"]]

    # Get women-led
    people = pd.read_csv("data/people.csv")
    people = people[["first_name", "last_name", "gender", "title", "organization"]]
    people = people[people['organization'].notna()]

    # Filter out companies without people
    print("Only keep companies with people")
    funded_companies["has_people"] = funded_companies['company_name'].swifter.apply(lambda x: has_people(x, people))
    funded_companies.to_csv("funded_companies_with_people.csv", index=False)
    funded_companies = funded_companies[funded_companies["has_people"] == True]
    funded_companies = funded_companies[["company_name", "country_code", "state_code", "region", "funding_rounds"]]
    funded_companies.to_csv("funded_companies_with_people_short.csv", index=False)

    # Add women-led as a column
    print("Add women-led")
    funded_companies["women_led"] = funded_companies['company_name'].swifter.apply(lambda x: women_led(x, people))
    print(funded_companies["women_led"])

    funded_companies.to_csv("funded_companies_women_led.csv", index=False)

if __name__ == "__main__":
    main()
