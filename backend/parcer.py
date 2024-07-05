import requests
def get_vacancies(params):
    url = 'https://api.hh.ru/vacancies'
    headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 YaBrowser/24.4.0.0 Safari/537.36"
    }
    pars_vacancies = []
    
    for i in range(0, 20):
        params.page = i
        response = requests.get(url, params=params, headers=headers)
        if response.status_code == 200:
            vacancies = response.json().get('items', [])
            for vacancie in vacancies:
                pars_vacancies.append({ 'vacancies_id': vacancie.get('id'),
                                        'url': vacancie.get('alternate_url'),
                                        'name': vacancie.get('name'),
                                        'company_name': vacancie.get('employer').get('name'),
                                        'vacancies_type': vacancie.get('type').get('name'),
                                        'professional_roles': vacancie.get('professional_roles')[0].get('name'),
                                        'snippet_requirement': vacancie.get('snippet').get('requirement'),
                                        'snippet_responsibility': vacancie.get('snippet').get('responsibility'),
                                        'experience': vacancie.get('experience').get('name'),
                                        'salary': str(vacancie.get('salary'))})
    return pars_vacancies