"""  PDF CONVERSOR
     Camilo Tobon - Holberton School
"""


import pdfkit
import re
import json
import os
import shutil


class Components:
    """ Components are HTML in a string format
    """
    def __init__(self, **data):
        self.template = ""
        self.name = ""
        self.data = data

    def prepare_general_substring(self):
        """ Take the data saved in self.data
            and build a HTML related about general information of student selected
        """

        subs = "<h1> General Information </h1> <hr>"
        subs += f"""
        <h4 style="color: red;"> Advice of progress:</h4>
        <center> <p> {self.data["advice"]} </p> </center>
        """
        data = self.data["general"]
        for field in data.keys():
            subs += f"<h2> {field}: </h2> <center> <p> {data[field]} </p> </center>"

        return subs.replace("_", " ")

    def prepare_project_substring(self):
        """ Take the data saved in self.data
            and build a HTML related about projects information of student selected
        """

        static = """
            <div class="projects">
                @tmp@
            </div>
        """
        subs = f"""
            <div class="projects">
                @tmp@
            </div>
        """

        iter = self.data["projects"]
        append_static = False
        avoid_keys = ["url_image"]
        for field in iter:
            if append_static:
                subs += static
            for key in field.keys():
                if key not in avoid_keys:
                    subs = re.sub(
                        "@tmp@", f"<h2> {key}: </h2> <center> <p> {field[key]} </p> </center>@tmp@", subs)
            else:
                subs = re.sub("@tmp@", "", subs)
                append_static = True

        return subs.replace("_", " ").replace("@tmp@", "")

    def get_student_name(self):
        """ Return student name """
        if self.data:
            return self.data["general"]["full_name"]


class PDFConversor(Components):
    """
    PDFConversor - Create PDF from HTML
    """

    def __init__(self, **data):
        Components.__init__(self, **data)

    def from_template(self):
        """ load the template and adding options of pdf pagination"""
        options = {
            'page-size': 'Letter',
            'margin-top': '0.75in',
            'margin-right': '0.75in',
            'margin-bottom': '0.75in',
            'margin-left': '0.75in',
            'encoding': "UTF-8",
            'custom-header': [
                ('Accept-Encoding', 'gzip')
            ],
            'no-outline': None
        }
        pdfkit.from_string(self.template, self.name, options=options)
        filepath = os.getcwd() + f"/{self.name}"
        folderpath = os.path.join(os.getcwd(), "report") + "/pdf_tmp"

        shutil.move(filepath, folderpath)

    def fill_data(self):
        """ Using Regex for allocate the html component in correct position
            @key@
        """
        if self.data:
            #self.template = re.sub("@student_name@", self.get_student_name(), self.template)
            self.template = re.sub(
                "@general@", self.prepare_general_substring(), self.template)
            self.template = re.sub(
                "@projects@", self.prepare_project_substring(), self.template)


class GetReport(PDFConversor):
    def __init__(self, **data):
        PDFConversor.__init__(self, **data)
        self.name = "test1.pdf" if "username" not in data else data["username"] + ".pdf"
        # with open("pdf_templates/template1.html", "r") as f:
        with open(os.path.join(os.getcwd(), "report") + "/pdf_templates/template1.html") as f:
            self.template = f.read()
        self.fill_data()
