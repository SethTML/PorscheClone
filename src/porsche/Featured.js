import React , {useRef ,useState ,useEffect} from 'react';
import Model from './Model.js';
import Model718 from './Images/Model718.PNG';
import Model911 from './Images/Model911.PNG';
import ModelMacan from './Images/ModelMacan.PNG';
import ModelCayenne from './Images/ModelCayenne.PNG';
import ModelPanamera from './Images/ModelPanamera.PNG';
import ModelTaycan from './Images/ModelTaycan.PNG';

const Logos = {
  Logo718: (<svg viewBox="0 0 70 36" className = 'ModelLogo' xmlns="http://www.w3.org/2000/svg"><path d="M65.775 16.54c-.053 2.082-1.376 3.714-3.193 4.966h-.004c-2.666 1.83-6.394 2.846-8.752 3.235-2.812.465-7.38.711-10.852-.256-2.39-.67-4.378-1.997-4.725-4.326-.308-2.078 1.19-3.804 3.221-5.241 3.135-2.22 6.565-2.67 6.565-2.67s-1.243-1.452-.773-3.207c1.385-5.175 9.88-6.698 13.428-6.868 6.933-.33 8.55 3.036 8.625 3.191l.003.005c.645 1.196.389 2.49-.285 3.69-1.523 2.709-5.44 4.127-5.44 4.127s2.182 1.072 2.182 3.354zM63.08 5.654c-1.21-.266-5.307-.598-9.097 1.608l.004.005c-1.128.654-1.773 1.404-1.603 2.248.171.844 1.006 1.342 2.125 1.513 4.298.66 8.016-.939 9.122-1.622 1.1-.678 1.693-1.556 1.603-2.215s-.935-1.266-2.154-1.537zM51.587 21.33c2.642-.327 4.488-1.01 5.835-1.812h-.005c2.386-1.427 2.002-2.708 2.002-2.708-.129-.892-1.02-1.565-2.396-1.954-1.361-.385-3.202-.484-5.227-.237-2.243.27-4.42 1.015-5.749 1.826-1.342.816-2.091 1.727-2.006 2.727.08.935 1.01 1.58 2.367 1.95 1.342.37 3.163.46 5.18.208zM7.978 22.175c2.12-3.714 8.752-11.621 19.073-16.625l-2.675-3.273c-2.68.39-5.128.598-8.22.67-2.58.056-4.687.108-6.769.085-2.356-.027-2.87.55-3.496 1.25l-.152.168s-.842 1.038-1.604 2.053c-.43.572-.833 1.136-1.047 1.504-.441.754.455 1.133 1.28.683 1.765-.953 4.953-1.598 9.127-1.584.895 0 1.78-.018 2.641-.057a41.72 41.72 0 0 0 1.855-.123C9.62 11.223 4.174 17.55 0 24.936h3.647c1.694.018 2.941-.332 4.331-2.76zM27.672 23.261 44.046 4.867 40.702 2.31c-.56.266-4.355 2.23-9.416 3.26l-3.178 3.623c3.226-.057 6.072-.114 6.072-.114L19.969 24.964s2.822-.014 2.983-.019c1.936-.061 3.292-.185 4.72-1.684z"/></svg>)
  ,
  Logo911: (<svg viewBox="0 0 84 36" className = 'ModelLogo' xmlns="http://www.w3.org/2000/svg"><path d="m69.29 9.2v15.8h13.9v-22l-6.74.04-14.5 2.25v-2.29l-6.74.04-14.61 2.27c-.23-1.29-1.36-2.28-2.72-2.28h-35.12c-1.52 0-2.76 1.24-2.76 2.76v8.02c0 1.52 1.83 2.76 3.35 2.76h24.2c2.23 0 1.99 2.76 0 2.76h-27.55v5.65h37.88c1.52 0 2.76-1.24 2.76-2.76v-12.06l7.41-.97v15.8h13.9v-14.84l7.34-.96zm-59.08-.76h17.39c.85 0 1.54.69 1.54 1.54s-.7 1.54-1.54 1.54h-17.39c-.85 0-1.54-.69-1.54-1.54s.7-1.54 1.54-1.54z"/></svg>)
  ,
  LogoCayenne: (<svg viewBox="0 0 206 36" className = 'ModelLogo' xmlns=" http://www.w3.org/2000/svg"><path d="m204.37 20.28c-.22-.27-.52-.36-.91-.27-.52.14-1.58.34-3.16.6s-3.64.51-6.16.75-5.19.36-8.02.36c-.71 0-1.25-.05-1.64-.15-.15-.04-.28-.09-.4-.16 3.14-.62 6.01-1.27 8.61-1.93 2.99-.76 5.33-1.47 7.04-2.12s2.56-1.18 2.56-1.59-.26-.96-.77-1.64-1.13-1.29-1.86-1.81-1.41-.79-2.05-.79c-1.89 0-4.42.53-7.59 1.59s-5.94 2.35-8.33 3.86c-1.83 1.16-2.95 2.28-3.37 3.34-.7.18-1.38.32-2.03.42-.99.15-1.8.21-2.41.17-.62-.03-.92-.14-.92-.32 0-.16.24-.54.72-1.13s1-1.21 1.57-1.85c.8-.89 1.41-1.61 1.85-2.17.43-.56.65-.94.65-1.15 0-.23-.06-.51-.19-.84s-.32-.62-.58-.85c-.26-.24-.58-.36-.94-.36-1.19 0-2.98.34-5.39 1.01-2.2.62-5.43 1.67-9.64 3.16l3.71-4.06-5.54.58-5.27 5.98c-1.41.48-2.68.87-3.81 1.18s-2.01.51-2.65.6-.96.06-.96-.1.24-.54.72-1.13 1-1.21 1.57-1.85c.8-.89 1.41-1.61 1.85-2.17.43-.56.65-.94.65-1.15 0-.23-.06-.51-.19-.84s-.32-.62-.58-.85c-.26-.24-.58-.36-.94-.36-1.19 0-2.98.34-5.39 1.01-2.2.62-5.43 1.67-9.64 3.16l3.71-4.06-5.54.58-5.11 5.81c-.97.41-2.12.82-3.44 1.22-1.39.42-3.36.82-5.9 1.2s-5.51.56-8.91.56c-.71 0-1.25-.05-1.64-.15-.15-.04-.28-.09-.4-.16 3.14-.62 6.01-1.27 8.61-1.93 2.99-.76 5.33-1.47 7.04-2.12s2.56-1.18 2.56-1.59-.26-.96-.77-1.64-1.13-1.29-1.86-1.81-1.41-.79-2.05-.79c-1.89 0-4.42.53-7.59 1.59s-5.94 2.35-8.33 3.86c-2.16 1.38-3.33 2.68-3.53 3.92-1.48.51-3.01 1.08-4.61 1.71-1.84.73-3.59 1.47-5.25 2.22-.41.19-.81.37-1.19.55 1.79-1.86 3.73-3.82 5.82-5.88 2.86-2.83 5.63-5.36 8.29-7.59l-6.36.55-1.23 1.33c-1.01 1.09-2.03 2.2-3.05 3.31-.85.34-1.71.68-2.61 1-1.47.52-2.78.95-3.92 1.28s-1.93.5-2.36.5c-.16 0-.27-.05-.34-.14s-.11-.19-.14-.31c-.05-.25.47-1.01 1.54-2.29s2.53-2.84 4.38-4.68l-5.44.58c-1.73 1.82-3.44 3.75-5.14 5.78-1.63.61-2.86 1.04-3.68 1.28s-1.37.36-1.64.36c-.18 0-.35-.11-.51-.34s-.29-.5-.39-.8c-.1-.31-.15-.58-.15-.8 0-.18.1-.42.31-.72s.63-.8 1.28-1.5c.65-.71 1.48-1.58 2.48-2.63l1.23-1.3h-4.38c-3.08 0-6.62.43-10.64 1.3-4.01.87-7.44 2-10.29 3.39-1.73.84-2.93 1.72-3.61 2.62l-1.52.12c-6.18.5-12.09.92-17.75 1.25-5.65.33-10.85.4-15.58.21s-7.1-.89-7.1-2.1c0-1.09 2.34-2.47 7.03-4.14 4.68-1.66 10.8-3.29 18.35-4.89s15.33-2.85 23.36-3.76c.59-.73.95-1.29 1.06-1.68s.04-.66-.22-.8c-.26-.15-.68-.22-1.25-.22-5.15 0-12.31.8-21.48 2.41-9.16 1.61-17.24 3.7-24.23 6.29-6.97 2.55-10.46 5.26-10.46 8.11 0 2.33 2.95 3.76 8.84 4.31s12.93.51 21.12-.12c6.85-.53 13.33-1.22 19.44-2.09.52 1 1.84 1.55 3.95 1.65 2.8.12 6.14-.51 10-1.92 1.8-.65 3.49-1.42 5.08-2.29.39 1 .74 1.77 1.02 2.29.34.63.65 1.05.92 1.27s.59.32.96.32c.57 0 2.07-.43 4.5-1.3.57-.2 1.12-.4 1.65-.6-.26.48-.38.85-.36 1.11.02.27.16.48.41.62s.65.21 1.2.21c.93 0 2.23-.21 3.88-.62s3.39-.95 5.21-1.61c1.01-.37 1.94-.74 2.81-1.12-.56.61-1.11 1.22-1.68 1.84-2.69 2.96-5.87 6.49-9.54 10.57l2.97-.31c1.71-1.23 3.44-2.35 5.2-3.35s4.02-2.11 6.8-3.33c2.12-.93 4.69-1.97 7.72-3.11.04.03.07.07.11.1.57.44 1.4.76 2.48.96 1.08.19 2.42.29 4.02.29 2.23 0 4.7-.18 7.4-.53s5.28-.85 7.75-1.49c.3-.08.59-.16.88-.24l-1.8 2.05h2.63c.8 0 1.48-.09 2.04-.27s1.03-.48 1.42-.89l3.07-3.32c2.53-.85 4.72-1.55 6.56-2.1 2.18-.65 3.8-1.08 4.87-1.28 1.07-.21 1.61-.22 1.61-.03 0 .07-.18.32-.55.75s-.78.91-1.23 1.44c-1.07 1.21-1.92 2.21-2.53 2.99-.62.79-.92 1.33-.92 1.62 0 .78.92 1.09 2.75.94s3.98-.56 6.45-1.25c.73-.2 1.42-.41 2.08-.61l-1.77 2.01h2.63c.8 0 1.48-.09 2.04-.27s1.03-.48 1.42-.89l3.07-3.32c2.53-.85 4.72-1.55 6.56-2.1 2.18-.65 3.8-1.08 4.87-1.28 1.07-.21 1.61-.22 1.61-.03 0 .07-.18.32-.55.75s-.78.91-1.23 1.44c-1.07 1.21-1.92 2.21-2.53 2.99-.62.79-.92 1.33-.92 1.62 0 .78.89 1.16 2.67 1.15s3.85-.27 6.21-.79c1.23-.27 2.31-.54 3.26-.81.31.44.8.79 1.49 1.05 1.24.47 3.07.7 5.49.7 1.8 0 3.88-.11 6.24-.34s4.71-.55 7.04-.96 4.38-.88 6.14-1.4c-.14-.57-.31-.99-.53-1.27zm-145.64.55c-2.13.34-3.2.23-3.2-.34s1-1.3 2.99-2.21c1.99-.9 4.37-1.69 7.11-2.36 2.44-.6 4.6-.93 6.49-.99l-.28.26c-1.46 1.35-3.48 2.54-6.05 3.57-2.58 1.04-4.93 1.73-7.06 2.07zm50.54-2.79c1.72-.88 3.64-1.68 5.74-2.39 2.11-.72 3.54-1.08 4.29-1.08.16 0 .36.06.61.19s.47.27.65.44.27.3.27.39c0 .16-.6.43-1.81.82s-2.98.88-5.32 1.47c-1.92.49-4.16 1.03-6.71 1.64.39-.42 1.14-.92 2.26-1.49zm76.77 0c1.72-.88 3.64-1.68 5.74-2.39 2.11-.72 3.54-1.08 4.29-1.08.16 0 .36.06.62.19.25.13.47.27.65.44s.27.3.27.39c0 .23-1.36.72-4.07 1.47-2.39.66-5.65 1.48-9.77 2.47.39-.42 1.14-.92 2.26-1.49z"/></svg>)
  , 
  LogoPanamera: (<svg viewBox="0 0 243 36" className = 'ModelLogo' xmlns="http://www.w3.org/2000/svg"><path d="m242.18 20.51c-.16-.53-.65-.64-.92-.57-1.39.4-2.8.92-4.49 1.05-.59.05-1.14-.14-1.38-.44-.25-.31-.45-.66-.6-1.06-.34-.87-.27-1.35.22-1.93 1.54-1.88 3.5-3.85 5.25-5.72-9.88-.33-18.16 1.6-24.34 4.13-.35-.89-.77-1.9-1.34-2.74-.51-.75-1.1-1.23-2.29-1.26-.87-.02-2.05.19-4.15.9-1.99.67-4.23 1.53-7.21 2.73.89-.97 1.86-2.04 3.02-3.32-1.93.2-3.85.43-5.78.63-1.76 2-3.55 4.05-5.08 5.77-5.65 2.01-12.56 3.24-18.03 3.23-.96 0-2.57-.01-3.08-.19 9.64-1.93 15.94-3.94 17.85-5.02 1.27-.72.96-1.2.57-1.88-.51-.88-1.34-1.83-2.43-2.6-.92-.65-1.54-.81-2.26-.8-1.15.01-2.54.22-4.14.61-3.65.9-8.44 2.62-12.36 5.14-1.95 1.25-3.13 2.41-3.53 3.56-1.23.32-2.36.52-3.46.61-.91.08-1.97.14-2.14-.18-.18-.32.5-1.09 1.08-1.77 1.21-1.41 2.21-2.55 3.18-3.84.32-.42.38-.65.21-1.15-.13-.4-.34-.77-.71-1.09-.32-.29-.63-.39-1.06-.39-1.22 0-3.09.45-5.28 1.09-2.32.68-4.55 1.52-6.81 2.37.35-.5.59-.89.74-1.16.18-.33.17-.51.07-.83-.11-.36-.27-.67-.62-.97-.34-.28-.68-.38-1.12-.37-1.22.02-3.02.45-5.8 1.35-2.13.69-4.21 1.4-6.21 2.14 1.08-1.18 2.24-2.46 3.72-4.08-1.93.2-3.85.41-5.78.61-1.81 2.05-3.65 4.15-5.2 5.91-1.82.67-3.31 1.24-4.96 1.63-.72.17-.94.06-1.24-.46-.12-.2-.22-.43-.3-.68-.2-.63-.07-1.3.4-1.86 1.5-1.77 3.34-3.62 4.99-5.38-11.03-.37-20.02 1.89-26.41 4.88-1.34.63-2.83 1.46-3.77 2.73-1.82.58-3.42 1-4.62 1.24-1.73.33-1.92.16-.73-1.25 1.34-1.59 2.95-3.27 3.87-4.61.36-.53.39-.71.25-1.23-.14-.53-.36-.9-.67-1.2-.32-.32-.64-.44-1.08-.43-1.26 0-3.08.35-5.57 1.04-2.3.64-5.66 1.73-10.07 3.28 1.12-1.22 2.32-2.54 3.87-4.23-1.93.2-3.86.39-5.78.59-1.81 2.05-3.65 4.14-5.2 5.89-1.82.67-3.31 1.23-4.96 1.61-.72.17-.94.04-1.24-.47-.12-.2-.22-.43-.3-.68-.2-.63-.07-1.3.4-1.86 1.5-1.77 3.34-3.61 4.99-5.36-11.03-.37-20.01 1.81-26.41 4.8-2.24 1.05-4.79 2.83-4.48 4.98.32 2.17 3.43 2.63 5.55 2.55 5.28-.21 10.52-2.17 14.6-4.35.33.82.61 1.53 1.06 2.38.31.58.68 1.22 1.22 1.51.54.28 1.12.16 1.58.04 1.57-.39 3.14-.95 4.83-1.56-.58.67-1.22 1.39-1.83 2.08h2.45c2.12 0 3.02-.25 4.4-1.74.84-.91 1.78-1.93 2.7-2.92 4.4-1.48 8.22-2.64 10.89-3.28 3.27-.79 3.04-.52 1.53 1.25-1.05 1.23-2.02 2.26-3.27 3.84-.73.92-1.26 1.72-.84 2.27.42.54 1.6.55 2.69.46 3.15-.26 6.5-1.17 9.52-2.12.57 1.96 3.49 2.35 5.49 2.27 5.28-.21 10.52-2.22 14.6-4.39.33.82.61 1.52 1.06 2.38.31.58.68 1.21 1.22 1.5.53.28 1.12.16 1.58.04 1.57-.39 3.13-.97 4.83-1.58-.58.67-1.22 1.4-1.83 2.09h2.45c2.13 0 3.03-.27 4.4-1.76.87-.94 1.83-1.98 2.77-3 3.1-1.14 5.74-2.04 7.68-2.56 2.55-.68 2.34-.55 1.09 1.24-1.45 2.08-3.03 4.01-4.64 6.06h2.63c1.7 0 3.07-.6 3.96-1.75.82-1.05 1.62-2.11 2.42-3.17 2.62-.98 4.95-1.82 7.74-2.53 2.42-.62 2.25-.32.88 1.25-.77.89-1.53 1.71-2.48 2.87-.76.94-1.6 2.06-1.21 2.7.38.64 1.92.72 3.7.63 3.26-.17 6.48-.97 9.1-1.71.69.85 3.44 1.86 9.06 1.64 4.89-.2 10.47-1.12 14.98-2.4-.63.73-1.36 1.56-2.06 2.35h2.45c2.14 0 3.03-.28 4.4-1.77 1.08-1.18 2.33-2.53 3.49-3.8 3.67-1.36 7.83-2.43 9.26-2.69 1.09-.19 1.97-.3 2.8 2.04.39-.04.79-.09 1.2-.13-1.87 1.37-2.8 3.18-1.84 4.58 1.01 1.47 3.47 1.7 5.19 1.63 5.2-.21 10.36-2.23 14.41-4.38.44 1.08.85 2.11 1.41 2.98.55.86 1.08 1.22 2.34 1.07 3.23-.39 6.46-1.36 9.37-2.31-.09-.47-.15-.86-.27-1.25zm-190.71.44c-1.07.21-3.13.46-3.3-.25-.17-.69 1.52-1.69 2.87-2.32 4.25-1.96 10.65-3.46 14.41-3.55-4.08 3.71-9.79 5.3-13.98 6.11zm57.03.13c-1.07.21-3.13.46-3.3-.25-.17-.69 1.52-1.69 2.88-2.32 4.25-1.96 10.65-3.5 14.41-3.59-4.08 3.72-9.79 5.34-13.98 6.16zm65.25-2.82c3.45-1.78 7.94-3.28 9.76-3.58.7-.12.99-.06 1.36.12.27.14.52.3.74.52.3.3.44.42-.47.79-1.6.65-7.8 2.37-13.75 3.72.43-.47 1.29-1.01 2.36-1.56zm45.64 2.56c-1.07.21-3.14.46-3.31-.24-.17-.69 1.53-1.69 2.88-2.32 4.25-1.97 10.65-3.59 14.41-3.68-4.07 3.73-9.79 5.42-13.98 6.24z"/><path d="m3.04 24.42c1.55-.05 3.32-.45 4.45-1.34 2.31-1.82 5.18-4.06 6.92-5.48 17.07-1.54 28.3-3.19 36.77-5.91 5.11-1.64 7.74-3.47 7.83-5.7.09-2.15-2.14-4.02-9.59-4.48-12.4-.78-32.57 2.19-41.65 5.01-2.33.73-3.59 1.47-4.56 3.1 10.35-2.23 34.91-5.63 44.25-4.68 4.68.48 3.98 2.4 1 3.62-7.37 3.02-25.1 5.32-29.78 5.56 2.52-2.1 5.08-4.27 7.68-6.51-2.95.35-5.91.64-8.87.99-5.72 4.81-12.1 10.71-17.49 15.83 1.01 0 2.03.01 3.04-.02z"/></svg>)
  ,
  LogoTaycan: (<svg viewBox="0 0 163 36" className = 'ModelLogo' xmlns="http://www.w3.org/2000/svg"><path d="m40.32 14.44c-2.45 2.25-5.33 3.69-9.28 4.9-1.37.42-2.56.71-3.5.93-6.54 1.43-5.16-.93 1.07-3.21 3.92-1.36 7.6-2.26 11.71-2.63m84.92-.03c-2.48 2.22-5.45 3.56-9.5 4.81-1.41.43-2.62.73-3.59.96-6.44 1.38-5.54-.64.83-2.94 4.01-1.38 8.03-2.4 12.26-2.83zm-23.89 8.93c.83.89 3.06 1.26 5.58 1.06 2.61-.15 6.12-.89 10.47-2.47 1.02-.38 2.02-.77 3.06-1.22.17-.07.35-.15.52-.23.18.41.35.79.54 1.17.86 1.83 2.02 2.76 4.55 2 1.38-.42 3.19-.86 5.65-1.72l-2.12 2.4h2.67c1.3-.05 2.4-.51 3.24-1.34l3.91-3.86c6.28-2 10.68-2.76 12.67-3.02.16-.02.22.08.05.24-1.79 1.84-4.02 4.57-5.22 6.52-.75 1.21.15 1.44 2.39 1.53 2.01.08 3.76-.09 5.75-.31 2.1-.24 4.26-.55 7.51-1.41l-.32-1.12c-.14-.57-.72-.81-1.39-.67-1.51.31-2.31.47-3.03.57-.84.12-1.65.2-1.98.21-1.55.07-1.67-.44-.97-1.35 1.42-1.85 3.5-4.01 5.07-5.85.34-.38.29-.81.19-1.11-.11-.3-.24-.59-.4-.91-.7-1.38-6.56.06-11.42 1.51-2.55.75-4.8 1.51-5.77 1.83l3.51-3.86-5.81.31-5.37 6.16c-1.45.55-2.81.99-4.18 1.48-2 .73-3.17.43-3.73-.46-.44-.7-.54-1.38.02-2.06l4.91-5.43c-4.21-.13-11.71.37-18.25 2.14-3.46.94-7.04 2.43-8.26 3.08-2.01 1.07-3.94 2.34-4.46 3.5-8.56 1.65-12.68 1.34-15.41 1.04-6.25-.7-.98-3.46.64-4.14 2.51-1.05 6.1-1.92 10.64-2.92 1.38-.3 3.15-.6 4.87-.88.06 0 .12-.02.18-.03.33-.06.49-.29.7-.54.86-1.04.98-1.52-.21-1.54-.27 0-.54 0-.83.02-3.41.2-8.88.84-13.83 2.24-8.09 2.33-12.4 5.17-12.16 7.59-4.76 1.52-11.52 4.13-14.95 5.87 2.79-2.75 10.47-9.91 17.16-15.65l-6.79.61-4.7 4.51c-2.33 1.21-7.26 3.05-10.15 3.5-.98.15-.3-.7.15-1.27 1.58-2 4.52-5.04 6.22-6.74-3 .31-4.55.32-6.72.68-.5.34-3.75 3.6-5.24 5.28-1.77.77-4.33 1.62-5.93 2.14-1.54.57-1.89.39-2.38-.48-.38-.68-.74-1.74-.32-2.23l4.86-5.67c-12.43-.11-19.72 1.73-25.64 5.31l-11.38 2.78.62-.64c1.73-1.8 3.47-3.6 5.19-5.41 1.29-1.36 2.56-2.74 3.82-4.12 1.34-1.47 2.64-2.96 3.93-4.48 2.44-.07 4.88-.17 7.32-.27 3.25-.14 6.5-.29 9.75-.32 1.13 0 2.08-.22 2.89-.57s1.48-.83 2.05-1.38c.25-.24.52-.49.8-.75.75-.69 1.56-1.45 2.2-2.16-4.02.15-8.05.34-12.07.55-4.03.21-8.06.45-12.09.71-3.61.23-7.21.5-10.81.78-2.96.23-5.92.49-8.88.78-1.24 1.2-2.5 2.43-3.72 3.68 2.4-.11 4.8-.22 7.2-.35 2.13-.11 4.31-.23 6.69-.36l1.27-.07c-1.4 1.64-2.8 3.28-4.2 4.92-1.34 1.57-2.68 3.14-4.03 4.71-1.31 1.52-2.61 3.05-3.91 4.57-1.24 1.46-2.48 2.92-3.72 4.38h3.25c1.06 0 2.23-.52 2.41-.62.3-.16.59-.34.87-.54l10.77-2.61c-1.85 2.77.35 5.09 8.74 3.48 3.4-.65 6.91-1.98 9.99-3.33.2.46.38.86.59 1.28.89 1.78 1.9 2.97 4.15 2.19 1.89-.57 5.13-1.71 7.5-2.81-.34.43-.69 1-.72 1.04-1.42 2.1-.84 2.93 3.03 2.31 3.58-.58 8.53-1.9 11.28-3.16-4.05 4.03-8.63 8.69-13.07 13.48l3.55-.77c1.68-.92 2.91-1.85 4.92-2.95 3.48-1.9 14.41-6.25 19.63-7.92 1.74 1.13 4.96 1.7 10.3 1.51 3.57-.12 8.23-.39 14.17-1.53z"/></svg>)
  ,
  LogoMacan: (<svg viewBox="0 0 175 36" className = 'ModelLogo' xmlns="http://www.w3.org/2000/svg"><path d="m173.73 20.59c-.08-.28-.21-.45-.38-.52s-.42-.06-.76.04c-1.18.36-2.28.62-3.33.77-1.04.16-1.89.22-2.54.18s-.97-.15-.97-.34c0-.17.25-.56.76-1.19.5-.62 1.06-1.27 1.66-1.94.84-.94 1.49-1.7 1.94-2.28.46-.59.68-.99.68-1.21 0-.24-.07-.53-.2-.88s-.34-.65-.61-.9c-.28-.25-.61-.38-.99-.38-1.25 0-3.14.35-5.67 1.06-2.32.65-5.7 1.76-10.15 3.32l3.9-4.27-5.83.61-5.45 6.2c-1.72.64-3.01 1.09-3.87 1.34s-1.44.38-1.73.38c-.19 0-.37-.12-.54-.36s-.31-.52-.41-.85c-.11-.32-.16-.61-.16-.85 0-.19.11-.44.32-.76.22-.31.67-.84 1.35-1.58s1.55-1.67 2.61-2.77l1.3-1.37h-4.61c-3.24 0-6.97.46-11.19 1.37s-7.83 2.1-10.83 3.56c-1.75.86-2.99 1.74-3.72 2.65-1.3.4-2.55.76-3.75 1.07-1.33.35-2.97.67-4.91.95-1.94.29-3.99.43-6.15.43-.98 0-1.76-.1-2.34-.31-.58-.2-.86-.61-.86-1.21 0-.72.88-1.48 2.63-2.27s4.01-1.53 6.76-2.21c2.76-.68 5.65-1.25 8.67-1.71.34-.34.61-.64.81-.9s.32-.49.34-.68c.05-.43-.25-.65-.9-.65-2.76 0-6.15.44-10.18 1.31-4.03.88-7.51 2.04-10.45 3.49-1.65.82-2.84 1.67-3.56 2.57-.83.3-1.51.52-2.03.67-.86.25-1.44.38-1.73.38-.19 0-.37-.12-.54-.36s-.31-.52-.41-.85c-.11-.32-.16-.61-.16-.85 0-.19.11-.44.32-.76.22-.31.67-.84 1.35-1.58s1.55-1.67 2.61-2.77l1.3-1.37h-4.61c-3.24 0-6.97.46-11.19 1.37s-7.83 2.1-10.83 3.56c-2.85 1.39-4.34 2.85-4.48 4.39-.22.01-.67.07-1.35.18-1.97.26-3.62.43-4.97.5-1.34.07-2.01-.08-2.01-.47 0-.34.55-1.17 1.64-2.5s2.5-2.95 4.23-4.86 3.39-3.71 5-5.41c1.22-1.32 2.31-2.49 3.26-3.53.95-1.03 1.42-1.59 1.42-1.69 0-.24-.12-.54-.36-.9s-.58-.67-1.01-.94c-.43-.26-.92-.4-1.48-.4-2.11 0-4.95.89-8.53 2.68-3.57 1.79-6.99 3.74-10.25 5.86s-6.66 4.42-10.18 6.89c-.74.53-1.37.97-1.89 1.31-.52.35-.77.5-.77.45s.51-.55 1.53-1.51 2.18-2.04 3.47-3.24c3.24-2.97 5.79-5.35 7.66-7.14s2.81-2.8 2.81-3.04c0-.26-.14-.58-.41-.95-.28-.37-.65-.7-1.12-.97-.47-.28-.98-.41-1.53-.41-2.14 0-5.81 1.27-11.01 3.81-5.21 2.54-10.9 5.67-17.09 9.39s-11.89 7.33-17.09 10.83h.76c2.25-.05 3.83-.11 4.73-.2.9-.08 1.7-.26 2.41-.54s1.6-.77 2.68-1.49c4.44-2.88 8.85-5.6 13.24-8.15s8.01-4.56 10.87-6.03c2.85-1.46 4.28-2.07 4.28-1.84 0 .02-.13.16-.38.41s-.57.57-.95.95c-4.49 4.41-9.45 9.61-14.9 15.58 2.45 0 4.17-.04 5.18-.11s1.94-.28 2.79-.61c.85-.34 1.95-.95 3.29-1.84l7.23-4.71c3.72-2.37 6.79-4.31 9.23-5.79 2.43-1.49 4.27-2.55 5.51-3.18 1.24-.64 1.85-.82 1.85-.56 0 .02-.18.24-.54.65s-.79.88-1.3 1.4c-1.94 2.14-3.63 4.02-5.07 5.67-1.44 1.64-2.76 3.3-3.98 4.98-1.21 1.68-1.82 2.9-1.82 3.67 0 .72 1.01 1.13 3.02 1.24s4.34-.01 6.98-.36c2.32-.31 4.18-.67 5.59-1.1.71.7 1.95 1.09 3.73 1.17 2.95.13 6.46-.54 10.52-2.01 1.89-.69 3.67-1.49 5.35-2.41.42 1.05.77 1.86 1.07 2.41.36.66.68 1.1.97 1.33s.62.34 1.01.34c.6 0 2.18-.46 4.73-1.37.55-.2 1.07-.39 1.59-.58.16.49.54.91 1.15 1.26.83.48 1.92.83 3.27 1.06s2.84.34 4.44.34c1.8 0 3.9-.21 6.31-.63s4.76-.95 7.05-1.6c.59-.17 1.16-.33 1.69-.5.29 1.45 1.75 2.24 4.37 2.35 2.95.13 6.46-.54 10.52-2.01 1.89-.69 3.67-1.49 5.35-2.41.42 1.05.77 1.86 1.07 2.41.36.66.68 1.1.97 1.33s.62.34 1.01.34c.6 0 2.18-.46 4.73-1.37.33-.12.65-.23.97-.35l-1.64 1.86h2.77c.84 0 1.55-.1 2.14-.29s1.08-.5 1.49-.94l3.23-3.49c2.66-.89 4.97-1.63 6.9-2.21 2.29-.68 4-1.13 5.13-1.35s1.69-.23 1.69-.04c0 .07-.19.34-.58.79-.38.46-.82.96-1.3 1.51-1.13 1.27-2.01 2.32-2.66 3.15s-.97 1.4-.97 1.71c0 .82.94 1.22 2.81 1.21s4.05-.29 6.53-.83 4.43-1.1 5.85-1.67c-.1-.6-.19-1.04-.27-1.31zm-103.62.38c-2.24.36-3.36.24-3.36-.36s1.05-1.37 3.15-2.32 4.59-1.77 7.48-2.48c2.56-.63 4.84-.98 6.83-1.05l-.3.27c-1.54 1.42-3.66 2.67-6.37 3.76s-5.19 1.82-7.43 2.18zm53.54 0c-2.24.36-3.36.24-3.36-.36s1.05-1.37 3.15-2.32 4.59-1.77 7.48-2.48c2.56-.63 4.84-.98 6.83-1.05l-.3.27c-1.54 1.42-3.66 2.67-6.37 3.76s-5.19 1.82-7.43 2.18z"/></svg>)
};

function Featured() {
  return (
    <div className="Featured">
      <div className = 'FeaturedView'>
        <div className = 'FeaturedItem carPaint'>
          <div className = 'FeaturedItemContent'>
            <div className = 'FeaturedItemWrapper'>
              <span className = 'FeaturedItemFont'>
                Porsche x Backdrop.
              </span>
              <svg className = 'FeaturedItemButton' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14.81 18 20 11.5 14.81 5h-1.25l4.81 6H4v1h14.37l-4.81 6h1.25z"/></svg>
            </div>
          </div>
        </div>
        <div className = 'FeaturedItem carMeet'>
         <div className = 'FeaturedItemContent'>
            <div className = 'FeaturedItemWrapper'>
              <span className = 'FeaturedItemFont'>
                Rennsport is Back & You're Invited.
              </span>
              <svg className = 'FeaturedItemButton' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14.81 18 20 11.5 14.81 5h-1.25l4.81 6H4v1h14.37l-4.81 6h1.25z"/></svg>
            </div>
          </div>
        </div>
        <div className = 'FeaturedItem carDriver'>
         <div className = 'FeaturedItemContent'>
            <div className = 'FeaturedItemWrapper'>
              <span className = 'FeaturedItemFont'>
                Porsche Esports Challenge USA.
              </span>
              <svg className = 'FeaturedItemButton' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14.81 18 20 11.5 14.81 5h-1.25l4.81 6H4v1h14.37l-4.81 6h1.25z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className = 'FeaturedModels'>
        <span className = 'ModelCrumb'>
          Models
        </span>
        <div className = 'ModelGrid'>
          <Model
            Logo = {Logos.Logo718}
            Image = {Model718}
            Desc = "The mid-engine sports car for two."
            Price = "From $ 68,300 *"
            Build = "Build your 718"
            All = "All 718 models"
          />
          <Model
            Logo = {Logos.Logo911}
            Image = {Model911}
            Desc = "The quintessential, rear-engine sports car."
            Price = "From $ 114,400 *"
            Build = "Build your 911"
            All = "All 911 models"
          />
          <Model
            Logo = {Logos.LogoTaycan}
            Image = {ModelTaycan}
            Desc = "The pure expression of an electric sports car."
            Price = "From $ 90,900 *"
            Build = "Build your Taycan"
            All = "All Taycan models"
          />
          <Model
            Logo = {Logos.LogoPanamera}
            Image = {ModelPanamera}
            Desc = "The sports car with stylish design and everyday practicality."
            Price = "From $ 92,400 *"
            Build = "Build your Panamera"
            All = "All Panamera models"
          />
          <Model
            Logo = {Logos.LogoMacan}
            Image = {ModelMacan}
            Desc = "The sports car of compact SUVs."
            Price = "From $ 60,900 *"
            Build = "Build your Macan"
            All = "All Macan models"
          />
          <Model
            Logo = {Logos.LogoCayenne}
            Image = {ModelCayenne}
            Desc = "Impressive sports car performance, with up to five seats."
            Price = "From $ 79,200 *"
            Build = "Build your Cayenne"
            All = "All Cayenne models"
          />
        </div>
        <span className = 'FeaturedFine'>
        *Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges. Dealer sets actual selling price.
        </span>
      </div>
    </div>
  );
}

export default Featured;