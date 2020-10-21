**<h1>Bomberbot Parents</h1>**

## **Project description:**
Bomberbot Parents is an MVP of a tool that allows parents to follow the performance  
of their children, understand what they are learning and how they are doing it. All this  
in real time and from anywhere with an internet connection.

## **Enviroment:**

### **Backend:**
* Django
* Django REST framework
* django-cors-headers
* Virtualenv
* PostgreSql
* psycopg2
* PDFKit
* WKhtmltopdf

### **Frontend:**
* ReactJS
* Webpack
* HTML5
* CSS3
* Bootstrap
* Babel
* NodeJS

## **Architecture:**

![Architecture](https://i.ibb.co/SxK1vYv/WebArq.png)

## **Installation:**

1. Create or define the directory where the project will be cloned and enter the directory.  
``` 
$  mkdir my_dir  
$  cd my_dir 
```

2. Install virtualenv, create and activate the virtual environment.
```
$  pip3 install virtualenv  
$  virtualenv venv  
$  source venv/bin/activate
```

3. Clone Github repository
```
 $  git clone https://github.com/Deepzirox/Bomberbot-Parents.git
```

4. Enter the Bomberbot-parent directory and run the install.sh file.
```
 $  cd Bomberbot-parent  
 $  ./install.sh
 ```

5. Install the tools to generate the PDF.
```
 $  sudo apt-get install wkhtmltopdf
```

6. Activation of the project in Django.
```
 $  python3 manage.py migrate
```

7. Create a super administrator for the database.
```
 $  python3 manage.py createsuperuser
 $  Username: 
 $  Email address: 
 $  Password: 
 $  Password (again):
```

8. Start Server.
```
 $  python3 manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).
October 21, 2020 - 01:17:40
Django version 3.1.2, using settings 'backend.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

9. In your browser go to http://127.0.0.1:8000/admin and then provide the username and password that you created in point 7  

![admin](https://i.ibb.co/hg0VX0K/admin.png)

10.  To store the message for the parents, first select the Add + option of Congratulations and copy and paste the following message
>Congratulations, your child has achieved it, he has taken another step in the development of his computational thinking and better understands the world of technology.  

![adata](https://i.ibb.co/QKzFGy1/adminmodel.png)
![adata](https://i.ibb.co/SQbW4MW/savemodel1.png)

## **Authors:**
* **Camilo Tobon** - [Deepzirox](https://github.com/Deepzirox)
* **Marlon Garcia** - [clasesucatmarlon](https://github.com/clasesucatmarlon)
* **Nasser Abuchaibe** - [NasserAbuchaibe](https://github.com/NasserAbuchaibe)
* **Deiwin Monsalve** - [Deiwin-Ignacio-Monsalve-Altamar](https://github.com/Deiwin-Ignacio-Monsalve-Altamar)

