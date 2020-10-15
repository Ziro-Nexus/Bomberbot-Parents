import datetime
from .models import AdviceModel1, AdviceModel2, AdviceModel3

def exp_days(exp_date, pending_task):
    """[Calculate the number of days expired]

    Args:
        exp_date ([str]): [expiration date]
        pending_task ([int]): [amount of pending tasks]

    Returns:
        [str]: [Number of days expired]
    """
    current_date = datetime.datetime.now()
    exp_d = datetime.datetime.strptime(exp_date, '%Y-%m-%d')

    if current_date > exp_d and pending_task != 0:
        days = str(current_date - exp_d)
        days  = days.split(',')
        return days[0]
    else:
        return "0"


def pending(num_task, task_ok):
    """[Calculate the number of pending tasks or projects]

    Args:
        num_task ([str]): [total task or projects]
        task_ok ([str]): [completed tasks or projects]

    Returns:
        [int]: [Numbers of pending tasks or projects]
    """
    return int(num_task) - int(task_ok)

def set_advice(typ):
    """[Concatenates and creates the model name to perform the query]

    Args:
        typ ([str]): [number for AdviceModel]

    Returns:
        [str]: [advice for parents]
    """
    model = "AdviceModel" + typ + ".objects.all()"
    queryset_advice1 = eval(model)
    for adv in queryset_advice1:
        advice = adv.advice
    return advice
