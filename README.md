**<h1>Bomberbot Parents</h1>**

## **Project description:**
Bomberbot Parents is an MVP of a tool that allows parents to follow the performance  
of their children, understand what they are learning and how they are doing it. All this  
in real time and from anywhere with an internet connection.

Currently Bomberbot does not have a tool that allows parents to monitor the performance of their children, so we have proposed this solution to give comprehensive access to that information and with the possibility that they can export and download these reports in Pdf format.

Another interesting feature of Bomberbot Parents is that it also shows motivating or alert messages according to the performance of their children, to manage the content of these messages we have an administrator module that allows the Bomberbot staff to edit these contents.

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

2. Clone Github repository
```
 $  git clone https://github.com/Deepzirox/Bomberbot-Parents.git
```

3. Enter the Bomberbot-parent directory and run the install.sh file.
```
 $  cd Bomberbot-parent  
 $  ./install.sh
 ```


4. Activation of the project in Django.
```
 $  python3 manage.py migrate

```
5. Make migration of application.
```
 $  python3 manage.py makemigrations progress_app
```
6. Create a super administrator for the database.
```
 $  python3 manage.py createsuperuser
 $  Username: 
 $  Email address: 
 $  Password: 
 $  Password (again):
```

7. Start Server.
```
 $  python3 manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).
October 21, 2020 - 01:17:40
Django version 3.1.2, using settings 'backend.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

8. In your browser go to http://127.0.0.1:8000/admin and then provide the username and password that you created in point 6.

![admin](https://i.ibb.co/hg0VX0K/admin.png)

9.  To store the message for parents we first select the Add+ option of **Congratulations** and copy and paste the following message and save.
>Congratulations, your child has achieved it, he has taken another step in the development of his computational thinking and better understands the world of technology.  

<a href="https://ibb.co/XCNZTcv"><img src="https://i.ibb.co/RDZpWRV/adminmodel.png" alt="adminmodel" border="0"></a>    
<a href="https://ibb.co/Xy1NrKN"><img src="https://i.ibb.co/9w6zk1z/savemodel1.png" alt="savemodel1" border="0"></a>

10. Store in the following tables in this order:  
* In **Motivational overdue task** add the following message:
>Cheer up, we can still do it, your child can still do the overdue tasks and become the best in the world of technology  
* In **Motivational taks ok** add the following message:  
>Congratulations your child is doing very well and every day he is acquiring skills in the world of technology.

11. In your browser go to http://127.0.0.1:8000/index/ and log in.  
Below you will find a list of test users.
>**User name:** nasser1  **Password:** 12345  
>**User name:** camilo1 **Password:** 12345  
>**User name:** katerine1 **Password:** 12345  

12. You can hang out with children to learn about their performance in the Bomberbot program.
<a href="https://ibb.co/VjPJJs0"><img src="https://i.ibb.co/tmWQQ9w/selectok.png" alt="selectok" border="0"></a>

13. You can navigate between the information cards, you can also export and download a PDF file with a complete report of the child's information.  
<a href="https://ibb.co/Tkn80SP"><img src="https://i.ibb.co/kxr8Dfq/infostu.png" alt="infostu" border="0"></a>

## **Authors:**
* **Camilo Tobon** - [Deepzirox](https://github.com/Deepzirox)
* **Marlon Garcia** - [clasesucatmarlon](https://github.com/clasesucatmarlon)
* **Nasser Abuchaibe** - [NasserAbuchaibe](https://github.com/NasserAbuchaibe)
* **Deiwin Monsalve** - [Deiwin-Ignacio-Monsalve-Altamar](https://github.com/Deiwin-Ignacio-Monsalve-Altamar)

