import pdfkit
import re
import json


class Components:
    def __init__(self, **data):
        self.template = ""
        self.name = ""
        self.data = data

    def prepare_general_substring(self):
        subs = "<h1> General Information </h1> <hr>"
        data = self.data["general"]
        for field in data.keys():
            subs += f"  <h2> {field}: </h2> <center> <p> {data[field]} </p> </center>"

        return subs.replace("_", " ")


class PDFConversor(Components):
    """
    PDFConversor - Clase que se encarga de crear los pdf a partir de pdf.
    """

    def __init__(self, **data):
        """ Heredamos todo de components """
        Components.__init__(self, **data)

    def from_template(self):
        """ cargar template y guardarlo con el nombre dado """
        pdfkit.from_string(self.template, self.name)

    def fill_data(self):
        """ Necesito crear un HTML segun los datos que se establecen 
            esta funcion se encarga de acomodar el dato en el campo
            corresspondiente que siempre debe empezar por @<llave>@
        """
        if self.data:
            self.template = re.sub(
                "@general@", self.prepare_general_substring(), self.template)


class Template1(PDFConversor):
    def __init__(self, **data):
        PDFConversor.__init__(self, **data)
        self.name = "test1.pdf" if "username" not in data else data["username"] + ".pdf"
        with open("pdf_templates/template1.html", "r") as f:
            self.template = f.read()
        self.fill_data()
