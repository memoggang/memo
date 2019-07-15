#include<stdio.h>

int main()
{
	int m, square[2][4], result[4]={0, }; // result[0]=x의 포인트 
	for(int i=0; i<2; i++)
	{
		for(int j=0; j<4; j++)
			scanf("%d", &square[i][j]);
	}
	if (square[1][0]<square[0][2]){
		for(int i=0; i<4; i++){
			m = square[1][i];
			square[1][i] = square[0][i];
			square[0][i] = m;
		}
	}
	
	if(square[1][0]<=square[0][2])
		result[0]=1;
	else {
		printf("none");
		return 0;
	}
	
	if(square[1][1]==square[0][3]&&square[0][3]==square[1][0]){
		printf("point");
		return 0;
	} else if(square[1][1]==square[0][3]){
		printf("line");
		return 0;
	} else if(square[1][3]==square[0][1]&&square[1][0]==square[0][2]){
		printf("point");
		return 0;
	} else if(square[1][0]==square[0][2]){
		printf("line");
		return 0;
	}else if(square[1][1]==square[0][1]){
		printf("rectangle");
		return 0;
	} else printf("rectangle");
	
	return 0;
	
}
