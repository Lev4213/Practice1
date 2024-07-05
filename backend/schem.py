from pydantic import BaseModel
from typing import Optional

class Param(BaseModel):
    text: Optional[str] = None 
    salary: Optional[int] = None
    per_page: Optional[int] = 100
    page: Optional[int] = 1

class ParsVacancie(BaseModel):
    id: int
    vacancies_id: int
    url: str
    name: str
    company_name: str | None = None
    vacancies_type: str | None = None 
    professional_roles: str | None = None 
    snippet_requirement: str | None = None 
    snippet_responsibility: str | None = None 
    experience: str | None = None 
    salary: str
