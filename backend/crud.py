from sqlalchemy.orm import Session
import sqlalchemy as sq
from schem import ParsVacancie
from models import Vacancie

def create_vacancie(db: Session, vacancies: ParsVacancie):
    db_vacancies = Vacancie(**vacancies)
    db.add(db_vacancies)
    db.commit()
    return db_vacancies

def update_vacancie(db: Session, vacancies: dict):
    db_vacancies = db.query(Vacancie).filter(Vacancie == vacancies['vacancies_id'])
    for var, value in vacancies.items():
        setattr(db_vacancies, var, value) if value else None
    db.commit()
    return db_vacancies