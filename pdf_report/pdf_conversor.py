import pdfkit
import re
import json


class Components:
    def __init__(self, **data):
        self.template = ""
        self.name = ""
        self.data = data

    def prepare_general_substring(self):
        """ Toma los datos guardados y segun esos me genera un componente que establece
        informacion general sobre el estudiante """
    
        subs = "<h1> General Information </h1> <hr>"
        data = self.data["general"]
        for field in data.keys():
            subs += f"  <h2> {field}: </h2> <center> <p> {data[field]} </p> </center>"

        return subs.replace("_", " ")

    def prepare_project_substring(self):
        static = """
            <div class"projects">
                @tmp@
            </div>
            <hr>
        """
        subs = f"""
            <h1 style="color: red;"> Advice of progress:</h1>
            <center> <p> {self.data["advice"]} </p> </center> 
            <div style="margin-top: 50px;">
                <h1> Current projects: {len(self.data["projects"])} </h1> <hr>
                @tmp@
            </div>
        """
        iter = self.data["projects"]
        for field in iter:
            subs += static
            for key in field.keys():
                subs = re.sub(
                    "@tmp@", f"<p> {key}: {field[key]} </p> @tmp@", subs)
            else:
                subs = re.sub("@tmp@", "", subs)

        return subs


class PDFConversor(Components):
    """
    PDFConversor - Clase que se encarga de crear los pdf a partir de pdf.
    """

    def __init__(self, **data):
        """ Heredamos todo de components """
        Components.__init__(self, **data)

    def from_template(self):
        """ cargar template y guardarlo con el nombre dado, establecer opciones de pagina"""
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

    def fill_data(self):
        """ Necesito crear un HTML segun los datos que se establecen 
            esta funcion se encarga de acomodar el dato en el campo
            corresspondiente que siempre debe empezar por @<llave>@
        """
        if self.data:
            self.template = re.sub(
                "@general@", self.prepare_general_substring(), self.template)
            self.template = re.sub(
                "@projects@", self.prepare_project_substring(), self.template)


class GetReport(PDFConversor):
    def __init__(self, **data):
        PDFConversor.__init__(self, **data)
        self.name = "test1.pdf" if "username" not in data else data["username"] + ".pdf"
        with open("pdf_templates/template1.html", "r") as f:
            self.template = f.read()
        self.fill_data()


pdf = ""
with open("test.json", "r") as f:
    pdf = json.loads(f.read())


x = GetReport(**pdf)
x.from_template()
