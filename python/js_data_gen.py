import csv
import json
from collections import defaultdict


def serialize_funding_rounds(is_female: bool, rounds: int, existing=defaultdict(int)):
    # takes in a bool 'is_female' and number of rounds for a current company,
    # and updates the record (by gender)
    return {
        'funded_companies_f': existing['funded_companies_f'] + (1 if is_female else 0),
        'funding_rounds_f': existing['funding_rounds_f'] + (rounds if is_female else 0),
        'funded_companies_m': existing['funded_companies_m'] + (1 if not is_female else 0),
        'funding_rounds_m': existing['funding_rounds_m'] + (rounds if not is_female else 0),
    }


def women_led_funded_us(input_path: str, output_path: str):  # -> Json Object
    with open(input_path) as f:
        reader = csv.DictReader(f)
        next(reader)  # skip headers
        companies_by_state = {}
        for row in reader:
            country, state = row['country_code'], row['state_code']
            if country == 'USA':
                companies_by_state[state] = serialize_funding_rounds(
                    row['women_led'] == 'True',
                    int(row['funding_rounds']),
                    companies_by_state[state] if state in companies_by_state else defaultdict(
                        int)
                )

    with open(output_path, 'w') as f:
        json.dump(companies_by_state, f)


def main():
    women_led_funded_us('./funded_companies_women_led.csv', './output.json')


if __name__ == '__main__':
    main()
