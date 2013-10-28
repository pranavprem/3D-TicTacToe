var ttt = new Array(3);
var i;
var j;
var temp=0;

for (i = 0; i < 3; ++i)
    {ttt[i] = new Array(3);
    }

for (i=0; i <3; i++)
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
            big[i][j]='TEST ';
        }
    }
for(k=0;k<9;++k)
    {for(i=0;i<3;++i)
        {for(j=0;j<3;++j)
            {ttt[k][i][j]='test ';
            }
        }
    }







function reset()
    {document.getElementById("thing").value=' ';
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
    {var t=document.getElementById("thing").value;
     
     for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                     arr[i][j]=ttt[t][i][j];
     }
     


    var a=document.getElementById("switcher").value;
    
    var flag=0;	
    for(i=0;i<3;++i)
                 {if (arr[i][0]==arr[i][1] && arr[i][1]==arr[i][2])
                     flag=1;
                  if (arr[0][i]==arr[1][i] && arr[1][i]==arr[2][i])
                     flag=1;
                 }
     if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2])
         flag=1;
     if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0])
         flag=1;
     
     
     
     if(flag==1)
        {
        switch(x){
        case 0 : big[0][0]=a;
        case 1: big[0][1]=a;
		case 2: big[0][2]=a;
        case 3: big[1][0]=a;
		case 4: big[1][1]=a;
		case 5: big[1][2]=a;
		case 6: big[2][0]=a;
		case 7: big[2][1]=a;
		case 8: big[2][2]=a;
     }
     
     
                       
		
    
        
    }


















function funky(x) {
    var t=document.getElementById("thing").value;
    var a;
    if(temp%2==0)
        {a='X';}
    else
        {a='O';}
    
    
    if(t==' ')
        {document.getElementById("thing").value=x;
         x=parseInt(x);
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
        {   temp=temp+1;
            x=parseInt(x);
            alert(x);
            t=parseInt(t);
            switch(x){
                        case 0: {ttt[t][0][0]=a;break;}
                        case 1: {ttt[t][0][1]=a;break;}
                        case 2: {ttt[t][0][2]=a;break;}
                        case 3: {ttt[t][1][0]=a;break;}
                        case 4: {ttt[t][1][1]=a;break;}
                        case 5: {ttt[t][1][2]=a;break;}
                        case 6: {ttt[t][2][0]=a;break;}
                        case 7: {ttt[t][2][1]=a;break;}
                        case 8: {ttt[t][2][2]=a;break;}
                        }
            
           reset(); 
        }
                
            
    }
    





    