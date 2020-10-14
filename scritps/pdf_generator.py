from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
import uuid

"""
Bomberbot parents PDF generator
By: Camilo Tobon - Speed Coders
"""
JUMPSIZE = 230
class PDFGenerator:
    y_controller = lambda y : y - JUMPSIZE
    x_controller = lambda x : x + JUMPSIZE if x > 0 else x - JUMPSIZE
    def __init__(self):
        self.obj_rendered = 1
        self.pagesize = (1024, 1024)
        self.x, self.y = (5, self.pagesize[0] - JUMPSIZE)
        self.name = str(uuid.uuid1()) + ".pdf"
        self.canvas = canvas.Canvas(self.name, pagesize=self.pagesize)
    
    def default(self):
        self.canvas.setFont("Times-Roman", 50)
        self.canvas.setStrokeColorRGB(0.56, 0.168, 0.172)
        self.canvas.setFillColorRGB(1,0.4,0)

    def next(self, jump=0, mod=1):
        self.y = PDFGenerator.y_controller(self.y - jump)
        if self.obj_rendered % mod == 0:
            self.x, self.y = (5, self.pagesize[0] - JUMPSIZE)
            self.canvas.showPage()
            self.default()

    def Bomberbot_header(self, footer=False):
        if footer:
            self.y -= 500
        self.canvas.drawImage(
            "pdf_static/logo1.png", 
            self.x,
            self.y
        )
        self.next(50, 2)
        self.obj_rendered += 1
    
    def report_header(self, end=False, **kwargs):
        # dibujando el margen del contenido
        self.canvas.rect(110, self.y - 500, 800, 700)
        # dibujando el titulo del contenido
        self.canvas.drawString(120, self.y + 100, kwargs.get("title"), wordSpace=0)
        if not end:
            self.next(10, 1) 
        self.obj_rendered += 1

    def save(self):
        self.canvas.save()


pdf = PDFGenerator()
pdf.default()
pdf.Bomberbot_header()
pdf.report_header(title="Progreso del estudiante Camilo")
pdf.Bomberbot_header()
pdf.report_header(title="Progreso del estudiante Camilo", end=True)

pdf.save()

