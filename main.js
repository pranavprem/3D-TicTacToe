var ttt = new Array(3);
var i;
var j;
var temp=0;

for (i = 0; i < 9; ++i)
    {ttt[i] = new Array(3);
    }

for (i=0; i <9; i++)
    {for(j=0;j<3;++j)
        {ttt[i][j]=new Array(3)
        }
    }


var big = new Array(3);

for (i = 0; i < 3; ++i)
    {big[i] = new Array(3);
    }


temp=0;
for(i=0;i<3;++i)
    {
    for(j=0;j<3;++j)
        {
            big[i][j]=' ';
        }
    }

for(k=0;k<9;++k)
    {for(i=0;i<3;++i)
        {for(j=0;j<3;++j)
            {ttt[k][i][j]=' ';
            }
        }
    }







function reset()
    {document.getElementById("thing").value=' ';
     document.getElementById("where").innerHTML='MAIN TICTACTOE';
     document.getElementById("tt00").innerHTML=big[0][0];
     document.getElementById("tt01").innerHTML=big[0][1];
     document.getElementById("tt02").innerHTML=big[0][2];
     document.getElementById("tt10").innerHTML=big[1][0];
     document.getElementById("tt11").innerHTML=big[1][1];
     document.getElementById("tt12").innerHTML=big[1][2];
     document.getElementById("tt20").innerHTML=big[2][0];
     document.getElementById("tt21").innerHTML=big[2][1];
     document.getElementById("tt22").innerHTML=big[2][2];
    }




            









function win(x)
    {
    

     var t=document.getElementById("thing").value;
     x=parseInt(x);
     var a;
     if(temp%2==0)
        {a='X';}
    else
        {a='O';}
     
     t=parseInt(t);
     var i;
     var j;
    
     
   
     
    var flag=0;	
    //check for draw
    for(i=0;i<3;++i)
        {for(j=0;j<3;++j)
                    {if(ttt[t][i][j]!=' ')
                        {flag=1;
                        }
                    }
        }

    
     
    if(flag==0)
        {switch(x){
                    case 0: {big[0][0]=a;
                             break;}
                    case 1: {big[0][1]=a;
                             break;}
                    case 2: {big[0][2]=a;
                             break;}
                    case 3: {big[1][0]=a;
                             break;}
                    case 4: {big[1][1]=a;
                             break;}
                    case 5: {big[1][2]=a;
                             break;}
                    case 6: {big[2][0]=a;
                             break;}
                    case 7: {big[2][1]=a;
                             break;}
                    case 8: {big[2][2]=a;
                             break;}
                }
        }



    else
            {flag=0;
            //rows and columns check
            for(i=0;i<3;++i)
                         {if (ttt[t][i][0]==ttt[t][i][1] && ttt[t][i][1]==ttt[t][i][2] && ttt[t][i][2]!=' ')
                            {flag=1;
                            }
                          if (ttt[t][0][i]==ttt[t][1][i] && ttt[t][1][i]==ttt[t][2][i] && ttt[t][2][i]!=' ')
                            {flag=1;
                            }
                         }
             //forward slanting diagonal check
             if(ttt[t][0][0]==ttt[t][1][1] && ttt[t][1][1]==ttt[t][2][2] && ttt[t][2][2]!=' ')
                {flag=1;
                }
             //backward slanting diagonal check
             if(ttt[t][0][2]==ttt[t][1][1] && ttt[t][1][1]==ttt[t][2][0] && ttt[t][2][0]!=' ')
                {flag=1;
                }
             
             
             if(flag==1)
                {
                switch(x){
                            case 0: {big[0][0]=a;break;}
                            case 1: {big[0][1]=a;break;}
                            case 2: {big[0][2]=a;break;}
                            case 3: {big[1][0]=a;break;}
                            case 4: {big[1][1]=a;break;}
                            case 5: {big[1][2]=a;break;}
                            case 6: {big[2][0]=a;break;}
                            case 7: {big[2][1]=a;break;}
                            case 8: {big[2][2]=a;break;}
                         }
                p="wins in here";
                q=a.concat(p);
                alert(q);
     
                }
            }    
     
        
    }






function funky(x) {
    var t=document.getElementById("thing").value;
    var a;
    if(temp%2==0)
        {a='X';}
    else
        {a='O';}
    
    var flag;
    if(t==' ')
        {flag=0;
         document.getElementById("thing").value=x;
         x=parseInt(x);
          switch(x){
                            case 0: {if(big[0][0]!=' ')
                                            {flag=1;}
                                     break;}
                            case 1: {if(big[0][1]!=' ')
                                        {flag=1;}
                                     break;}
                            case 2: {if(big[0][2]!=' ')
                                        {flag=1;}
                                     break;}
                            case 3: {if(big[1][0]!=' ')
                                        {flag=1;}
                                     break;}
                            case 4: {if(big[1][1]!=' ')
                                        {flag=1;}
                                     break;}
                            case 5: 
                                    {if(big[1][2]!=' ')
                                        {flag=1;}
                                     break;}
                            case 6: {if(big[2][0]!=' ')
                                        {flag=1;}
                                     break;}
                            case 7: {if(big[2][1]!=' ')
                                        {flag=1;}
                                     break;}
                            case 8: {if(big[2][2]!=' ')
                                        {flag=1;}
                                     break;}
                         }
        if(flag==0)
            {d="INNER TICTACTOE";
             p=d.concat(t);
             document.getElementById("where").innerHTML=p;
             document.getElementById("tt00").innerHTML=ttt[x][0][0];
             document.getElementById("tt01").innerHTML=ttt[x][0][1];
             document.getElementById("tt02").innerHTML=ttt[x][0][2];
             document.getElementById("tt10").innerHTML=ttt[x][1][0];
             document.getElementById("tt11").innerHTML=ttt[x][1][1];
             document.getElementById("tt12").innerHTML=ttt[x][1][2];
             document.getElementById("tt20").innerHTML=ttt[x][2][0];
             document.getElementById("tt21").innerHTML=ttt[x][2][1];
             document.getElementById("tt22").innerHTML=ttt[x][2][2];
            }
         else
            {alert("This position is already SET");
            }
        }
    else
        {   
            x=parseInt(x);
            t=parseInt(t);
            flag=0;
            switch(x){
                        case 0: {if(ttt[t][0][0]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 1: {if(ttt[t][0][1]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 2: {if(ttt[t][0][2]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 3: {if(ttt[t][1][0]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 4: {if(ttt[t][1][1]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 5: {if(ttt[t][1][2]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 6: {if(ttt[t][2][0]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 7: {if(ttt[t][2][1]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 8: {if(ttt[t][2][2]!=' ')
                                    {flag=1;} 
                                 break;}
                        }
            if(flag==0)
                    {switch(x){
                                case 0: {ttt[t][0][0]=a;
                                         break;}
                                case 1: {ttt[t][0][1]=a;
                                         break;}
                                case 2: {ttt[t][0][2]=a;
                                         break;}
                                case 3: {ttt[t][1][0]=a;
                                         break;}
                                case 4: {ttt[t][1][1]=a;
                                         break;}
                                case 5: {ttt[t][1][2]=a;
                                         break;}
                                case 6: {ttt[t][2][0]=a;
                                         break;}
                                case 7: {ttt[t][2][1]=a;
                                         break;}
                                case 8: {ttt[t][2][2]=a;
                                         break;}
                                }
                   win(t);
                   reset(); 
                    }
         
            else
                {alert("This position is already SET");
                }
            temp=temp+1;
            
        }
    }
    





    