var tictactoe = new Array(3);//serves as the 3d array for the tictactoe
//Declare a bunch of variables to iterate
var i;
var j;

var temp = 0;//just a temp variable


//initialize 3d tictactoe
for (i = 0; i < 9; i++)
    {
        tictactoe[i] = new Array(3);
    }

for (i=0; i <9; i++)
    {
    for(j=0;j<3;++j)
        {tictactoe[i][j]=new Array(3)
        }
    }


var big = new Array(3);//serves as the larger tictactoe with tictactoes on the inside that you need to win.

//initialize big tictactoe
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

//initialize the smaller tictactoes within the big one
for(k=0;k<9;++k)
    {for(i=0;i<3;++i)
        {for(j=0;j<3;++j)
            {tictactoe[k][i][j]=' ';
            }
        }
    }






//resets to display the outer tictactoe
function reset()
    {document.getElementById("thing").value=' ';
     document.getElementById("where").innerHTML='MAIN TICTACTOE';
     document.getElementById("tt00").innerHTML=big[0][0];
     document.getElementById("tt00").title=tictactoe[0][0][0]+"  |  "+tictactoe[0][0][1]+"   |   "+tictactoe[0][0][2]+"\n----------\n"+tictactoe[0][1][0]+"  |  "+tictactoe[0][1][1]+"   |   "+tictactoe[0][1][2]+"\n----------\n"+tictactoe[0][2][0]+"  |  "+tictactoe[0][2][1]+"   |   "+tictactoe[0][2][2];
     document.getElementById("tt01").innerHTML=big[0][1];
     document.getElementById("tt01").title=tictactoe[1][0][0]+"  |  "+tictactoe[1][0][1]+"   |   "+tictactoe[1][0][2]+"\n----------\n"+tictactoe[1][1][0]+"  |  "+tictactoe[1][1][1]+"   |   "+tictactoe[1][1][2]+"\n----------\n"+tictactoe[1][2][0]+"  |  "+tictactoe[1][2][1]+"   |   "+tictactoe[1][2][2];
     document.getElementById("tt02").innerHTML=big[0][2];
     document.getElementById("tt02").title=tictactoe[2][0][0]+"  |  "+tictactoe[2][0][1]+"   |   "+tictactoe[2][0][2]+"\n----------\n"+tictactoe[2][1][0]+"  |  "+tictactoe[2][1][1]+"   |   "+tictactoe[2][1][2]+"\n----------\n"+tictactoe[2][2][0]+"  |  "+tictactoe[2][2][1]+"   |   "+tictactoe[2][2][2];
     document.getElementById("tt10").innerHTML=big[1][0];
     document.getElementById("tt10").title=tictactoe[3][0][0]+"  |  "+tictactoe[3][0][1]+"   |   "+tictactoe[3][0][2]+"\n----------\n"+tictactoe[3][1][0]+"  |  "+tictactoe[3][1][1]+"   |   "+tictactoe[3][1][2]+"\n----------\n"+tictactoe[3][2][0]+"  |  "+tictactoe[3][2][1]+"   |   "+tictactoe[3][2][2];
     document.getElementById("tt11").innerHTML=big[1][1];
     document.getElementById("tt11").title=tictactoe[4][0][0]+"  |  "+tictactoe[4][0][1]+"   |   "+tictactoe[4][0][2]+"\n----------\n"+tictactoe[4][1][0]+"  |  "+tictactoe[4][1][1]+"   |   "+tictactoe[4][1][2]+"\n----------\n"+tictactoe[4][2][0]+"  |  "+tictactoe[4][2][1]+"   |   "+tictactoe[4][2][2];
     document.getElementById("tt12").innerHTML=big[1][2];
     document.getElementById("tt12").title=tictactoe[5][0][0]+"  |  "+tictactoe[5][0][1]+"   |   "+tictactoe[5][0][2]+"\n----------\n"+tictactoe[5][1][0]+"  |  "+tictactoe[5][1][1]+"   |   "+tictactoe[5][1][2]+"\n----------\n"+tictactoe[5][2][0]+"  |  "+tictactoe[5][2][1]+"   |   "+tictactoe[5][2][2];
     document.getElementById("tt20").innerHTML=big[2][0];
     document.getElementById("tt20").title=tictactoe[6][0][0]+"  |  "+tictactoe[6][0][1]+"   |   "+tictactoe[6][0][2]+"\n----------\n"+tictactoe[6][1][0]+"  |  "+tictactoe[6][1][1]+"   |   "+tictactoe[6][1][2]+"\n----------\n"+tictactoe[6][2][0]+"  |  "+tictactoe[6][2][1]+"   |   "+tictactoe[6][2][2];
     document.getElementById("tt21").innerHTML=big[2][1];
     document.getElementById("tt21").title=tictactoe[7][0][0]+"  |  "+tictactoe[7][0][1]+"   |   "+tictactoe[7][0][2]+"\n----------\n"+tictactoe[7][1][0]+"  |  "+tictactoe[7][1][1]+"   |   "+tictactoe[7][1][2]+"\n----------\n"+tictactoe[7][2][0]+"  |  "+tictactoe[7][2][1]+"   |   "+tictactoe[7][2][2];
     document.getElementById("tt22").innerHTML=big[2][2];
     document.getElementById("tt22").title=tictactoe[8][0][0]+"  |  "+tictactoe[8][0][1]+"   |   "+tictactoe[8][0][2]+"\n----------\n"+tictactoe[8][1][0]+"  |  "+tictactoe[8][1][1]+"   |   "+tictactoe[8][1][2]+"\n----------\n"+tictactoe[8][2][0]+"  |  "+tictactoe[8][2][1]+"   |   "+tictactoe[8][2][2];
    }




//checks for win on the big outer tictactoe            
function bigwin()
    {
    var a;
     if(temp%2==0)
        {a='X';}
    else
        {a='O';}
     
     
     var i;
     var j;
    
     
   
     
    var flag=0;	
        
    //check for draw
    for(i=0;i<3;++i)
        {for(j=0;j<3;++j)
                    {if(big[i][j]==' ')
                        {flag=1;
                        }
                    }
        }
        
    
     
    if(flag==0)
        {alert("Game is a draw. Unfortunate. :/");
        }
    
     else
            {flag=0;
            //rows and columns check
            for(i=0;i<3;++i)
                         {//alert(flag);
                          if (big[i][0]==big[i][1] && big[i][1]==big[i][2] && big[i][2]!=' ')
                            {flag=1;
                            }
                          
                          if (big[0][i]==big[1][i] && big[1][i]==big[2][i] && big[2][i]!=' ')
                            {flag=1;
                            }
                         }
             
             //forward slanting diagonal check
             if(big[0][0]==big[1][1] && big[1][1]==big[2][2] && big[2][2]!=' ')
                {flag=1;
                }
             //backward slanting diagonal check
             if(big[0][2]==big[1][1] && big[1][1]==big[2][0] && big[2][0]!=' ')
                {flag=1;
                }
             
             
             if(flag==1)
                { p=" WINS!!!";
                q=a.concat(p);
                alert(q);
                
                }
            }
    }







//check for win in smaller tictactoe
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
                    {if(tictactoe[t][i][j]==' ')
                        {flag=1;
                        }
                    }
        }

    
     
    if(flag==0)
        {alert("draw!");
            switch(x){
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
                         {if (tictactoe[t][i][0]==tictactoe[t][i][1] && tictactoe[t][i][1]==tictactoe[t][i][2] && tictactoe[t][i][2]!=' ')
                            {flag=1;
                            }
                          if (tictactoe[t][0][i]==tictactoe[t][1][i] && tictactoe[t][1][i]==tictactoe[t][2][i] && tictactoe[t][2][i]!=' ')
                            {flag=1;
                            }
                         }
             //forward slanting diagonal check
             if(tictactoe[t][0][0]==tictactoe[t][1][1] && tictactoe[t][1][1]==tictactoe[t][2][2] && tictactoe[t][2][2]!=' ')
                {flag=1;
                }
             //backward slanting diagonal check
             if(tictactoe[t][0][2]==tictactoe[t][1][1] && tictactoe[t][1][1]==tictactoe[t][2][0] && tictactoe[t][2][0]!=' ')
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
                p=" wins in here";
                q=a.concat(p);
                alert(q);
                
                }
            }    
     
        
    }





//funky function does major work when you click. It sets the value in the inner tictactoe that you clicked, checks for a win in the inner tictactoe and then checks for a win in the outer one.
function funky(x) {
    var t=document.getElementById("thing").value;
    var a; //variable a stores whose turn it is. X/O
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
             document.getElementById("tt00").innerHTML=tictactoe[x][0][0];
             document.getElementById("tt01").innerHTML=tictactoe[x][0][1];
             document.getElementById("tt02").innerHTML=tictactoe[x][0][2];
             document.getElementById("tt10").innerHTML=tictactoe[x][1][0];
             document.getElementById("tt11").innerHTML=tictactoe[x][1][1];
             document.getElementById("tt12").innerHTML=tictactoe[x][1][2];
             document.getElementById("tt20").innerHTML=tictactoe[x][2][0];
             document.getElementById("tt21").innerHTML=tictactoe[x][2][1];
             document.getElementById("tt22").innerHTML=tictactoe[x][2][2];
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
                        case 0: {if(tictactoe[t][0][0]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 1: {if(tictactoe[t][0][1]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 2: {if(tictactoe[t][0][2]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 3: {if(tictactoe[t][1][0]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 4: {if(tictactoe[t][1][1]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 5: {if(tictactoe[t][1][2]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 6: {if(tictactoe[t][2][0]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 7: {if(tictactoe[t][2][1]!=' ')
                                    {flag=1;} 
                                 break;}
                        case 8: {if(tictactoe[t][2][2]!=' ')
                                    {flag=1;} 
                                 break;}
                        }
            if(flag==0)
                    {switch(x){
                                case 0: {tictactoe[t][0][0]=a;
                                         break;}
                                case 1: {tictactoe[t][0][1]=a;
                                         break;}
                                case 2: {tictactoe[t][0][2]=a;
                                         break;}
                                case 3: {tictactoe[t][1][0]=a;
                                         break;}
                                case 4: {tictactoe[t][1][1]=a;
                                         break;}
                                case 5: {tictactoe[t][1][2]=a;
                                         break;}
                                case 6: {tictactoe[t][2][0]=a;
                                         break;}
                                case 7: {tictactoe[t][2][1]=a;
                                         break;}
                                case 8: {tictactoe[t][2][2]=a;
                                         break;}
                                }
                   win(t);
                   bigwin();
                    reset();
                
                    }
         
            else
                {alert("This position is already SET");
                }
            temp=temp+1;
        
            
        }
    }
    





    