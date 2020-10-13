import datetime
from .models import AdviceModel

class ProgressStudent:
    """ Class to process data on student progress """
    def __init__(self, *args, **kwargs):
        self.selected_course = kwargs.get('selected_course')
        self.total_project_course = kwargs.get('total_project_course')
        self.project_course_ok = kwargs.get('project_course_ok')
        self.owner_project1 = kwargs.get('owner_project1')
        self.reference_project1 = kwargs.get('reference_project1')
        self.project_name1 = kwargs.get('project1')
        self.description_project1 = kwargs.get('description_project1')
        self.number_task_project1 = kwargs.get('number_task_project1')
        self.task_ok1 = kwargs.get('task_ok1')
        self.task_due_date1 = kwargs.get('task_due_date1')
        self.cover_image1 = kwargs.get('cover_image1')

        if kwargs.get('owner_project2'):
            self.owner_project2 = kwargs.get('owner_project2')
            self.reference_project2 = kwargs.get('reference_project2')
            self.project_name2 = kwargs.get('project2')
            self.description_project2 = kwargs.get('description_project2')
            self.number_task_project2= kwargs.get('number_task_project2')
            self.task_ok2 = kwargs.get('task_ok2')
            self.task_due_date2 = kwargs.get('task_due_date2')
            self.cover_image2 = kwargs.get('cover_image2')
        else:
            self.owner_project2 = False
            self.reference_project2 = False
            self.project_name2 = False
            self.description_project2 = False
            self.number_task_project2 = False
            self.task_ok2 = False
            self.task_due_date2 = False
            self.cover_image2 = False

        self.last_time = kwargs.get('last_time')
        self.total_time = kwargs.get('total_time')


    def log_info(self):
        """ Returns information on the use of the platform """
        logi_info = {}
        logi_info['last_logging'] = self.last_time
        logi_info['total_time'] = self.total_time
        return logi_info


    def project_info(self):
        """ Returns current status of projects """
        
        proj_info = {}
        proj_info['course'] = self.selected_course
        proj_info['total_projs'] = self.total_project_course
        proj_info['finished_proj'] = self.project_course_ok
        
        # Calculate the number of pending projects
        pending = int(self.total_project_course) - int(self.project_course_ok)
        proj_info['pending_proj'] = pending

        # Defines current status of projects
        if pending == 0:
            proj_info['actual_project'] = "Completed all courses"
        elif pending == self.total_project_course and self.owner_project1:
            proj_info['actual_project'] = self.project_name1
        elif self.owner_project1 and not self.owner_project2:
            proj_info['actual_project'] = self.project_name1
        elif self.owner_project2:
            proj_info['actual_project'] = self.project_name2
        elif pending == self.total_project_course:
            proj_info['actual_project'] = "No project has started"
        
        # Establishes the general information of the projects to show
        if self.owner_project1:
            proj_info['reference_project1'] = self.reference_project1
            proj_info['name_project1'] = self.project_name1
            proj_info['proj_description1'] = self.description_project1
            proj_info['name_project2'] = self.project_name2
            
            if self.owner_project2:
                proj_info['reference_project2'] = self.reference_project2
                proj_info['name_project2'] = self.project_name2
                proj_info['proj_description2'] = self.description_project2
           
        return proj_info

 
    def image(self):
        """ Returns projects images """
        image_urls = {}
        if self.owner_project1:
            image_urls['project_image1'] = self.cover_image1
            if self.owner_project2:
                image_urls['project_image2'] = self.cover_image2
        return image_urls
        


    def task_info(self):
        """ Returns current status of tasks """
        task_inf = {}
        if self.owner_project1:
            task_inf['total_task_proj1'] = self.number_task_project1
            task_inf['finished_tasks'] = self.task_ok1

            # Calculate the number of pending task
            pending_t = int(self.number_task_project1) - int(self.task_ok1)
            task_inf['pending_task1'] = pending_t

            current_date = datetime.datetime.now()
            exp_date = datetime.datetime.strptime(self.task_due_date1, '%Y-%m-%d')
       
            if current_date > exp_date and pending_t is not 0:
                days = str(current_date - exp_date)
                days  = days.split(',')
                task_inf['days_exp_task1'] = days[0]

            task_inf['total_task_proj2'] = self.number_task_project2

            if self.owner_project2:
                task_inf['total_task_proj2'] = self.number_task_project2
                task_inf['finished_tasks2'] = self.task_ok2

                # Calculate the number of pending task
                pending_t2 = int(self.number_task_project2) - int(self.task_ok2)
                task_inf['pending_task2'] = pending_t2

                current_date = datetime.datetime.now()
                exp_date = datetime.datetime.strptime(self.task_due_date2, '%Y-%m-%d')
            
                if current_date > exp_date and pending_t is not 0:
                    days = str(current_date - exp_date)
                    days  = days.split(',')
                    task_inf['days_exp_task2'] = days[0]

        return task_inf

    # pendiente
    def advices(self):
        """ pendiente """
        advice = {}
        advice['advice_for_parents'] = "Congratulations your child is achieving it, and is developing incredible skills"
        return advice

