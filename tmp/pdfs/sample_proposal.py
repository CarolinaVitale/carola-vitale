from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from pathlib import Path
ROOT=Path('/Users/carola/Desktop/carola-vitale-web/carola-vitale')
A=ROOT/'public/brand'
pdfmetrics.registerFont(TTFont('Chippie',str(ROOT/'tmp/pdfs/Chippie.ttf')))


pdfmetrics.registerFont(TTFont('Hand',str(ROOT/'src/fonts/ShababaBaW01-Regular.ttf')))
W,H=595,842
c=canvas.Canvas(str(ROOT/'output/pdf/Carola-Vitale-Studio-Bloom-Muestra.pdf'),pagesize=(W,H))
c.setTitle('Studio Bloom | Sample proposal | Carola Vitale')
navy='#29458E'; pink='#F3A6CE'; cream='#FFF9F1'; muted='#3F4D70'
def display_copy(s):
 return s.replace('UI/UX', 'UI and UX').replace('What’s', 'What is').replace('you’ll', 'you will').replace('Let’s', 'Let us').replace('can’t', 'cannot').replace('&', 'and').replace('(', '').replace(')', '')
def text(s,x,y,size=12,font='Hand',color=navy):
 if font == 'Chippie': s=display_copy(s)
 c.setFillColor(HexColor(color));c.setFont(font,size);c.drawString(x,y,s)
def para(s,x,y,w=475,size=12,leading=19,font='Hand',color=muted):
 if font == 'Chippie': s=display_copy(s)
 p=Paragraph(s,ParagraphStyle('p',fontName=font,fontSize=size,leading=leading,textColor=HexColor(color)))
 _,h=p.wrap(w,900);p.drawOn(c,x,y-h);return y-h

B=Path('/Users/carola/Desktop/IDENTIDAD VISUAL/illustrator/4x')
def art(file,x,y,w,h):
 path=B/file if (B/file).exists() else A/file
 c.drawImage(str(path),x,y,w,h,mask='auto',preserveAspectRatio=True,anchor='c')
def bg(n,section=None,title=None):
 c.setFillColor(HexColor(cream));c.rect(0,0,W,H,fill=1,stroke=0)
 text('CAROLA VITALE',44,788,28,'Chippie'); text('DESIGN / DEVELOP / CREATE',45,768,8)
 text('SAMPLE / 25 OCT 2026',407,794,8)
 c.setStrokeColor(HexColor('#E6DACB'));c.line(44,59,551,59)
 text('STUDIO BLOOM / PROPOSAL',44,40,7)
 text('SAMPLE - NOT A VALID QUOTE',247,40,7,color='#A85162');text(f'{n:02d} / 08',507,40,8)
 if section: text(section,48,715,10)
 if title:
  text(title,48,668,38,'Chippie');c.setStrokeColor(HexColor(pink));c.setLineWidth(3);c.line(48,652,535,656)
def end():c.showPage()
def box(x,y,w,h,color):
 c.setFillColor(HexColor(color));c.roundRect(x,y,w,h,14,fill=1,stroke=0)

bg(1)
text('A PROPOSAL FOR',48,711,11)
box(42,558,330,146,'#E8DE67');text('Studio',55,639,73,'Chippie');text('Bloom',55,567,73,'Chippie')
para('A thoughtful brand and website<br/>for a well-being studio with purpose.',48,537,380,16,23)
art('founder@4x.png',95,90,455,380)
box(43,110,210,82,'#FBE2EB');para('Good ideas.<br/>Real people. Meaningful impact.',58,177,180,14,20,'Hand',navy)
end()
bg(2,'01 / INTRODUCTION','Hi, Studio Bloom!')
y=para('A calm digital space.<br/>A brand that feels like you.',48,616,475,21,29,'Chippie',navy)
y=para('Thank you for considering me for your project. This sample explores how a warm, intentional identity and a thoughtful website could help a well-being studio connect with its community.',48,y-28)
y=para('The creative direction pairs soft colors, expressive details and clear information. The goal: make it easy for visitors to understand your approach, explore your services and get in touch.',48,y-20)
box(48,275,499,100,'#F7E9D8');para('THE IDEA<br/>An authentic visual world that feels welcoming, grounded and easy to navigate.',68,350,450,15,23,'Chippie',navy)
art('flowerss@4x.png',370,84,160,180)
para('Prepared as a design demonstration. Studio Bloom, its needs and the proposed commercial terms are illustrative.',48,218,275,11,17)
end()
bg(3,'02 / SCOPE OF WORK',"What’s included.")
items=[('idea@4x.png','Brand strategy & visual identity','One creative direction, color palette, typography, primary logo, secondary logo and a concise brand guide.'),('laptop_1@4x.png','Website design (UI/UX)','Custom design for up to five pages: Home, About, Services, FAQ and Contact. Desktop and mobile layouts.'),('Artboard 23@4x.png','Front-end development','Responsive implementation, contact form, basic metadata, sitemap and performance checks.'),('Artboard 26@4x.png','Content guidance','Page structure and guidance for client-supplied copy and photography. Copywriting and photo production excluded.'),('envelope@4x.png','Post-launch support','One month of support for defects related to the agreed deliverables. New features quoted separately.')]
y=611
for file,title,copy in items:
 art(file,43,y-68,74,74);text(title,135,y-7,21,'Chippie');para(copy,135,y-23,397,11.5,17);y-=103
end()
bg(4,'03 / PROCESS & TIMELINE','A clear, collaborative process.')
para('An illustrative eight-week schedule, starting once the scope is agreed and the required content is available.',48,619)
steps=[('Discovery','Week 1','Goals, audience, requirements and creative direction.'),('Brand development','Weeks 2-3','Identity exploration, feedback and brand assets.'),('Website design','Weeks 4-5','Page layouts and responsive interface design.'),('Development','Weeks 6-7','Build the approved design and integrate the contact form.'),('Testing & handover','Week 8','Device checks, final revisions and walkthrough.'),('Launch','Week 8','Publish the approved site and begin support.')]
y=535
c.setStrokeColor(HexColor(pink));c.setLineWidth(2);c.line(67,145,67,535)
for i,(title,time,copy) in enumerate(steps):
 box(48,y-16,38,38,['#F3A6CE','#E8DE67','#D6C4EE','#ABC4F5','#C7D0AF','#F5B197'][i]);text(f'{i+1:02}',57,y-3,12)
 text(title,108,y+4,22,'Chippie');text(time,433,y+4,10);para(copy,108,y-11,420,11.5,17);y-=73
end()
bg(5,'04 / INVESTMENT','Project investment.')
para('Illustrative pricing for the scope in this sample. These are demonstration amounts, not an approved rate card or an offer.',48,615)
rows=[('Brand strategy & visual identity',850),('Website design (UI/UX)',1200),('Front-end development',1400),('Content guidance',350),('Post-launch support (1 month)',150)]
assert sum(v for _,v in rows)==3950
box(48,303,499,235,'#F9EDDF');text('SERVICE',65,514,10);text('PRICE / USD',443,514,10)
y=479
for label,value in rows:
 text(label,65,y,11);text(f'${value:,.0f}',461,y,13);y-=29
box(48,288,499,44,'#FADCE6');text('Total investment',65,304,15);text('$3,950',428,301,22,'Hand')
box(48,142,320,110,'#F8E8C3');text('Proposed payment plan',65,226,16,'Chippie');text('50% to start',65,197,12);text('$1,975',285,197,12);text('50% before launch',65,171,12);text('$1,975',285,171,12)
para('Sample currency: USD. Tax treatment, invoicing and payment terms must be confirmed before issuing a real quote.',48,120,440,10,15)
art('books-coffe@4x.png',410,142,125,130)
end()
bg(6,'05 / DELIVERABLES',"What you’ll receive.")
para('Everything needed to launch a consistent visual identity and a considered online presence.',48,615)
checks=['Logo suite: primary, secondary and submark','Brand guide: color, typography and logo usage','Five-page custom website','Responsive layouts for mobile and desktop','Basic on-page SEO metadata and sitemap','Contact form integration','A recorded website handover walkthrough','One month of post-launch defect support']
y=526
for item in checks:
 c.setFillColor(HexColor('#F47A54'));c.circle(57,y+4,4,fill=1,stroke=0);text(item,77,y,11.5);y-=35
box(48,109,300,96,'#EEE4F6');para('Same values.<br/>Bigger possibilities.',67,181,260,23,29,'Chippie',navy)
art('books@4x.png',365,119,175,105)
end()
bg(7,'06 / NEXT STEPS',"Let’s make it official.")
para('If the direction feels right, here is how we would move forward after agreeing the final proposal.',48,616)
y=526
for i,s in enumerate(['Review the scope and proposed investment.','Confirm the final terms and sign the agreement.','Pay the agreed initial installment.','Share your content and complete onboarding.','Kick off the project together.']):
 box(48,y-10,31,31,'#F6D6E4');text(str(i+1).zfill(2),54,y,11);para(s,96,y+13,440,12,20);y-=49
box(48,109,499,146,'#F8EDDE');text('Illustrative notes & conditions',66,231,23,'Chippie')
para('Proposed validity: 30 days from the issue date.<br/>Up to two revision rounds per creative stage.<br/>Hosting, domain, subscriptions and paid assets excluded.<br/>Timeline depends on feedback and content delivery.<br/>Additional work requires a separate written estimate.',66,211,455,11,18)
end()
bg(8)
text('Thank you',100,672,55,'Chippie',color='#5274D9')
text('FOR CONSIDERING THIS PROJECT',161,629,11)
art('place@4x.png',55,160,485,370)
para('I can’t wait to create<br/>something meaningful together.',85,142,425,22,28,'Chippie',navy)
end();c.save()
