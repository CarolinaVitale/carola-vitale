import sys
sys.path.insert(0,'/private/tmp/carola-pdf-fonttools')
from fontTools.ttLib import TTFont
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.cu2quPen import Cu2QuPen
f=TTFont('src/fonts/ChippieDEMO-Regular.otf'); gs=f.getGlyphSet(); glyphs={}
for name in f.getGlyphOrder():
 p=TTGlyphPen(gs);gs[name].draw(Cu2QuPen(p,1.0,reverse_direction=True));glyphs[name]=p.glyph()
b=FontBuilder(f['head'].unitsPerEm,isTTF=True);b.setupGlyphOrder(f.getGlyphOrder());b.setupCharacterMap(f.getBestCmap());b.setupGlyf(glyphs);b.setupHorizontalMetrics(f['hmtx'].metrics);b.setupHorizontalHeader(ascent=f['hhea'].ascent,descent=f['hhea'].descent);b.setupNameTable({'familyName':'Chippie','styleName':'Regular','uniqueFontIdentifier':'ChippieProposal','fullName':'Chippie','psName':'ChippieProposal'});b.setupOS2(sTypoAscender=f['hhea'].ascent,sTypoDescender=f['hhea'].descent,usWinAscent=max(0,f['hhea'].ascent),usWinDescent=abs(f['hhea'].descent));b.setupPost();b.save('tmp/pdfs/Chippie.ttf')
