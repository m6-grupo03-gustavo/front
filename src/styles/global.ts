import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: none;
  outline: none;
  font-size: 60%;
	vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; 
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root{
    --background: #F8F9FA;
    --brand1: #4529E6;
    --brand2: #5126EA;
    --brand3: #B0A6F0;
    --brand4: #EDEAFD;
    --grey0: #0A0C0d;
    --grey1: #191C1F;
    --grey2: #212529;
    --grey3: #343A40;
    --grey4: #495057;
    --grey5: #868E96;
    --grey6: #ADB5BD;
    --grey7: #CED4DA;
    --grey8: #DEE2E6;
    --grey9: #EDF2FF;
    --grey10: #F8F9FA;
    --alert1: #cd2b31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;
    --sucess1: #18794E;
    --sucess2: #CCEBD7;
    --sucess3: #DDF3E4;
    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF;
    --random11: #5700E3;
    --random12: #30007D;
    --border: rgba(0,0,0,0.15);
    --font-weight-Light: 300;
    --font-weight-medium: 500;
    --font-weigth-Bold: 700;
    --radius1: 0.8rem;
    --radius2: 0.6rem;
    --radius3: 0.4rem;
    --font-size-0: 3.8rem;
    --font-size-1: 2.8rem;
    --font-size-2: 2rem;
    --font-size-3: 1.85rem;
    --font-size-4: 1.6rem;
    --font-size-5: 1.3rem;
    --font-size-6: 1rem;
    --line-height: 150%;
}



body {
  background: var(--background);
  color: var(--grey0);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 5px;
  height: 2px;

  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: var(--brand1);
  border-radius: var(--radius2);
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--brand1);
}

@media (min-width: 700px) {
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video  {
    font-size: 62.5%; /* 10 / 16 = 0.625 */
  }
}

`
export default GlobalStyle