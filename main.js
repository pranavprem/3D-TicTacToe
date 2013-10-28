var ttt[9][3][3];
var big[3][3];

for(i=0;i<3;++i)
    for(j=0;j<3;++j)
        big[i][j]=' ';

for(k=0;k<9;++k)
    for(i=0;i<3;++i)
        for(j=0;j<3;++j)
            ttt[k][i][j]=' ';
    


function funky(x,y) {
    var t=document.getElementById("thing").value;
    
    if(t=='')
        {document.getElementById("thing").value=x;
        }
    else
        {
        switch(t)
            {case 'tt00':
        
            }
        
    
            
        document.getElementById("thing").value='';

        }
}



function win(a)
    {var t=document.getElementById("thing").value;
     switch(t){
         case 'tt00': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[0][i][j];
        case 'tt01': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[1][i][j];
		case 'tt02': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[2][i][j];
		case 'tt10': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[3][i][j];
		case 'tt11': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[4][i][j];
		case 'tt12': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[5][i][j];
		case 'tt20': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[6][i][j];
		case 'tt21': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[7][i][j];
		case 'tt22': for(i=0;i<3;++i)
                 for(j=0;j<3;++j)
                 var arr[i][j]=ttt[8][i][j];
     }
             
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
            switch(t){
         case 'tt00': big[0][0]=a;
        case 'tt01': big[0][1]=a;
		case 'tt02': big[0][2]=a;
        case 'tt10': big[1][0]=a;
		case 'tt11': big[1][1]=a;
		case 'tt12': big[1][2]=a;
		case 'tt20': big[2][0]=a;
		case 'tt21': big[2][1]=a;
		case 'tt22': big[2][2]=a;
     }
     
     
                       
		
    
        
    }
    