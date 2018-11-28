# flashcard-app

## Set Up

### requirements:
- conda or virtualenv
- npm or yarn
- postgresql and pgAdmin4+

```
conda create --name sandbox
source activate sandbox
cd sandbox
conda install python (installs pip)
pip install django
pip install django-rest-framework
pip install django-cors-headers
pip install psycopg2
git clone (this repo ssh)
cd flashcard-app (repo you just cloned)
```

#### in pgAdmin:
create a database called flash_card_app_dev
create a new user (below databases, Login/Group Roles) with the following:
  - name = 'name'
  - password = 'pass'
  - privileges = can login? > on
  
#### back in teminal:
in the terminal you should be at the cloned repo (flashcard-app)
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

#### you should see:
```
System check identified 1 issue (0 silenced).
November 28, 2018 - 05:49:43
Django version 2.1.2, using settings 'flash_cards.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

#### for the React App:
```
ctrl-c to quit server
cd client
yarn
yarn start
```
