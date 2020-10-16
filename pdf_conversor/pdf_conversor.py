import pdfkit


class PDFConversor:
    def __init__(self, **data):
        self.template = ""
        self.name = ""
        self.data = data

    def from_template(self):
        pdfkit.from_string(self.template, self.name)


class Template1(PDFConversor):
    def __init__(self, **data):
        PDFConversor.__init__(self, **data)
        self.name = "test1.pdf" if "username" not in data else data["username"]
        with open("templates/index.html", "r") as f:
            self.template = f.read()


t = Template1()
t.from_template()