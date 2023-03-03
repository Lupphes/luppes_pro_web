'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import wolf_style from '@/app/styles/wolf.style';

const Wolf = () => (
	<pre className="mx-auto">
		<code className="">
			<SyntaxHighlighter language="javascript" style={wolf_style}>
				{`
                         <li
                         fe><la
                        nguages><
                        python/><a
                        lgol lang="
                     C"><ext>C++</ex
                 t><ext>C#</ext></algo
              l><algol lang="JavaScript"
 ><add>TypeScript</add></algol><PHP/><al
 gol lang="Java"><ext>Kotlin</ext></algol>
   <script><spec>SASS</spec></script></lan
          guages><framework><VueJS version=
                   "3.x"/><Flask/><MongoDB/
                    ></framework><software>
                    <brand name="Adobe"><app
                   >Photoshop</app><app>Illus
                 trator</app><app>XD</app><ap
               p>Premiere Pro</app></brand><Pr
               otoPie/><InVision/><AutoCAD/></
               software><certificate obtained=
               "true"><CCNA2/><IELTS/><LPI_Lin
               ux/></certificate></life>`}
			</SyntaxHighlighter>
		</code>
	</pre>
);

export default Wolf;
