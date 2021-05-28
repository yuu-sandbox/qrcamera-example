import {date2str} from '@root/common/date2string';

export const switch2print = (location: Location,
                             projName: string | null,
                             projShukka: Date | null,
                             inum: string) =>
  {
    const QR = inum;
    const PROJ = projName || '未設定';
    const DATE = date2str(projShukka);
    const INUM = inum;
    const msg = `{C|}
{D0430,0520,0400|}
{AX;+000,+000,+00|}
{AY;+00,1|}
{C|}
{XB00;0052,0328,T,L,08,A,3,M2|}
{PC000;0337,0378,15,15,U,+00,33,B,J0000,+0000000000,P1|}
{PC001;0415,0384,15,15,U,+00,33,B,J0000,+0000000000,P1|}
{PC002;0496,0377,15,15,U,+00,33,B,J0000,+0000000000,P1|}
{PC003;0337,0262,15,15,U,+00,33,B,J0000,+0000000000,P1|}
{PC004;0498,0251,15,15,U,+00,33,B,J0000,+0000000000,P1|}
{PC005;0415,0232,15,15,U,+00,33,B,J0000,+0000000000,P1|}
{RB00;${QR}|}
{RC000;物件名:|}
{RC001;製品符号:|}
{RC002;建方日:|}
{RC003;${PROJ}|}
{RC004;${DATE}|}
{RC005;${INUM}|}`;

    console.log('print cmd:', msg);
    const printData = encodeURIComponent(msg);
    const url = `tecbcp:///tpcl?sensortype=2;printnumber=0001;rotation=0;autostatus=1;data=${printData}`;
    console.log('skyprint schema:', url);
    location.replace(url);
};
