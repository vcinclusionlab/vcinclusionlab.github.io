import json

with open('./json_data/funding_rounds_us.json') as f:
    data = json.load(f)

    fem_company_ratios = []
    fem_rounds_ratios = []
    for s, v in data.items():
        f, m = v['funded_companies_f'], v['funded_companies_m']
        fem_company_ratios += [(s, f / (m + f))]

        f, m = v['funding_rounds_f'], v['funding_rounds_m']
        fem_rounds_ratios += [(s, f / (m + f))]

    for item in sorted(fem_company_ratios, key=lambda i: i[1]):
        print(
            f'{item[0]}: {str(100*item[1])[:4]}% funded companies are female led')

    for item in sorted(fem_rounds_ratios, key=lambda i: i[1]):
        print(
            f'{item[0]}: {str(100*item[1])[:4]}% funding rounds are for female led companies')
