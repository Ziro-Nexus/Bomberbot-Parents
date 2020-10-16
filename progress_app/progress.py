import datetime
from .models import AdviceModel1, AdviceModel2, AdviceModel3
from .aux_functions import pending, exp_days, set_advice
from django.forms.models import model_to_dict

class ProgressStudent:
    """Class to process data on student progress """ 
    def __init__(self, *args, **kwargs):
        self.selected_course = kwargs.get('selected_course')
        self.total_project_course = kwargs.get('total_project_course')
        self.project_course_ok = kwargs.get('project_course_ok')
        self.owner_project1 = kwargs.get('owner_project1')
        self.reference_project1 = kwargs.get('reference_project1')
        self.project_name1 = kwargs.get('project1')
        self.description_project1 = kwargs.get('description_project1')
        self.goals_project1 = kwargs.get('project_goals1')
        self.skill_project1 = kwargs.get('acquired_skills1')
        self.number_task_project1 = kwargs.get('number_task_project1')
        self.task_ok1 = kwargs.get('task_ok1')
        self.task_due_date1 = kwargs.get('task_due_date1')
        self.cover_image1 = kwargs.get('cover_image1')

        if kwargs.get('owner_project2'):
            self.owner_project2 = kwargs.get('owner_project2')
            self.reference_project2 = kwargs.get('reference_project2')
            self.project_name2 = kwargs.get('project2')
            self.description_project2 = kwargs.get('description_project2')
            self.goals_project2 = kwargs.get('project_goals2')
            self.skill_project2 = kwargs.get('acquired_skills2')
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


    def general_inf(self):
        """ Return general information """
        general_info = {}
        general_info['last_logging'] = self.last_time
        general_info['total_time'] = self.total_time
        general_info['course'] = self.selected_course
        general_info['total_projs'] = self.total_project_course
        general_info['finished_proj'] = self.project_course_ok
        
        # Calculate the number of pending projects
        pending_p = pending(self.total_project_course, self.project_course_ok)
        general_info['pending_proj'] = pending_p

        # Defines current status of projects
        if pending_p == 0:
            general_info['actual_project'] = "Completed all courses"
        elif pending == self.total_project_course and self.owner_project1:
            general_info['actual_project'] = self.project_name1
        elif self.owner_project1 and not self.owner_project2:
            general_info['actual_project'] = self.project_name1
        elif self.owner_project2:
            general_info['actual_project'] = self.project_name2
        elif pending == self.total_project_course:
            general_info['actual_project'] = "No project has started"

        return general_info

    def projects(self):
        """ Return projects information """
        project = []
        if self.owner_project1:
            project1 = {}
            project1['reference_project'] = self.reference_project1
            project1['name_project'] = self.project_name1
            project1['proj_description'] = self.description_project1
            project1['goals_projet'] = self.goals_project1
            project1['skill_project'] = self.skill_project1
            project1['total_task_proj'] = self.number_task_project1
            project1['finished_tasks'] = self.task_ok1

            # Calculate the number of pending task
            pending_t1 = pending(self.number_task_project1, self.task_ok1)
            project1['pending_task'] = pending_t1
            project1['task_due'] = self.task_due_date1
            project1['days_exp_task'] = exp_days(self.task_due_date1, pending_t1)
            project1['url_image'] = self.cover_image1
            project.append(project1)

            if self.owner_project2:
                project2 = {}
                project2['reference_project'] = self.reference_project2
                project2['name_project'] = self.project_name2
                project2['proj_description'] = self.description_project2
                project2['goals_projet'] = self.goals_project2
                project2['skill_project'] = self.skill_project2
                project2['total_task_proj'] = self.number_task_project2
                project2['finished_tasks'] = self.task_ok2

                # Calculate the number of pending task
                pending_t2 = pending(self.number_task_project2, self.task_ok2)
                project2['pending_task'] = pending_t2
                project2['task_due'] = self.task_due_date2
                project2['days_exp_task'] = exp_days(self.task_due_date2, pending_t2)
                project2['url_image'] = self.cover_image2
                project.append(project2)
                
        return project  


    def advices(self):
        """ Returns a message to parents according
            to their child's performance
        """
        pending_t1 = pending(self.number_task_project1, self.task_ok1)
        pending_t2 = pending(self.number_task_project2, self.task_ok2)
        adv = ""
        if pending(self.total_project_course, self.project_course_ok) == 0:
            typ = "1"
            adv = set_advice(typ)
        elif exp_days(self.task_due_date1, pending_t1) is "0" and exp_days(self.task_due_date2, pending_t2) is "0":
            typ = "2"
            adv = set_advice(typ)
        elif exp_days(self.task_due_date1, pending_t1) is not "0" or exp_days(self.task_due_date2, pending_t2) is not "0":
            typ = "3"
            adv = set_advice(typ)
        
        return adv
