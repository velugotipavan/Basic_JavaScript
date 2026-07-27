//1st fool loop True then only it move to with in the loop
/*
for(let M : number = 1 ; M <= 5 ; M++)
{
     
    for(let S : number = 1 ; S <= 60; S++)
    {
        console.log("M value is : " +M)
    }
}

/* M value is : 1     60 Times 
M value is : 2         60 Times 
M value is : 3         60 Times 
M value is : 4         60 Times 
M value is : 5         60 Times 

*/

for(let M : number = 1 ; M <= 5 ; M++)
{
     
    for(let S : number = 1 ; S <= 60; S++)
    {
        console.log("M value is : " +M +" , " + " S value is : " +S);
    }
}
/*
M value is : 1   S value is : 1
M value is : 1   S value is : 2
M value is : 1   S value is : 3
M value is : 1   S value is : 4
M value is : 1   S value is : 5
M value is : 1   S value is : 6
M value is : 1   S value is : 7
M value is : 1   S value is : 8
M value is : 1   S value is : 9
M value is : 1   S value is : 10
M value is : 1   S value is : 11
M value is : 1   S value is : 12
M value is : 1   S value is : 13
M value is : 1   S value is : 14
M value is : 1   S value is : 15
M value is : 1   S value is : 16
M value is : 1   S value is : 17
M value is : 1   S value is : 18
M value is : 1   S value is : 19
M value is : 1   S value is : 20
M value is : 1   S value is : 21
M value is : 1   S value is : 22
M value is : 1   S value is : 23
M value is : 1   S value is : 24
M value is : 1   S value is : 25
M value is : 1   S value is : 26
M value is : 1   S value is : 27
M value is : 1   S value is : 28
M value is : 1   S value is : 29
M value is : 1   S value is : 30
M value is : 1   S value is : 31
M value is : 1   S value is : 32
M value is : 1   S value is : 33
M value is : 1   S value is : 34
M value is : 1   S value is : 35
M value is : 1   S value is : 36
M value is : 1   S value is : 37
M value is : 1   S value is : 38
M value is : 1   S value is : 39
M value is : 1   S value is : 40
M value is : 1   S value is : 41
M value is : 1   S value is : 42
M value is : 1   S value is : 43
M value is : 1   S value is : 44
M value is : 1   S value is : 45
M value is : 1   S value is : 46
M value is : 1   S value is : 47
M value is : 1   S value is : 48
M value is : 1   S value is : 49
M value is : 1   S value is : 50
M value is : 1   S value is : 51
M value is : 1   S value is : 52
M value is : 1   S value is : 53
M value is : 1   S value is : 54
M value is : 1   S value is : 55
M value is : 1   S value is : 56
M value is : 1   S value is : 57
M value is : 1   S value is : 58
M value is : 1   S value is : 59
M value is : 1   S value is : 60
M value is : 2   S value is : 1
M value is : 2   S value is : 2
M value is : 2   S value is : 3
M value is : 2   S value is : 4
M value is : 2   S value is : 5
M value is : 2   S value is : 6
M value is : 2   S value is : 7
M value is : 2   S value is : 8
M value is : 2   S value is : 9
M value is : 2   S value is : 10
M value is : 2   S value is : 11
M value is : 2   S value is : 12
M value is : 2   S value is : 13
M value is : 2   S value is : 14
M value is : 2   S value is : 15
M value is : 2   S value is : 16
M value is : 2   S value is : 17
M value is : 2   S value is : 18
M value is : 2   S value is : 19
M value is : 2   S value is : 20
M value is : 2   S value is : 21
M value is : 2   S value is : 22
M value is : 2   S value is : 23
M value is : 2   S value is : 24
M value is : 2   S value is : 25
M value is : 2   S value is : 26
M value is : 2   S value is : 27
M value is : 2   S value is : 28
M value is : 2   S value is : 29
M value is : 2   S value is : 30
M value is : 2   S value is : 31
M value is : 2   S value is : 32
M value is : 2   S value is : 33
M value is : 2   S value is : 34
M value is : 2   S value is : 35
M value is : 2   S value is : 36
M value is : 2   S value is : 37
M value is : 2   S value is : 38
M value is : 2   S value is : 39
M value is : 2   S value is : 40
M value is : 2   S value is : 41
M value is : 2   S value is : 42
M value is : 2   S value is : 43
M value is : 2   S value is : 44
M value is : 2   S value is : 45
M value is : 2   S value is : 46
M value is : 2   S value is : 47
M value is : 2   S value is : 48
M value is : 2   S value is : 49
M value is : 2   S value is : 50
M value is : 2   S value is : 51
M value is : 2   S value is : 52
M value is : 2   S value is : 53
M value is : 2   S value is : 54
M value is : 2   S value is : 55
M value is : 2   S value is : 56
M value is : 2   S value is : 57
M value is : 2   S value is : 58
M value is : 2   S value is : 59
M value is : 2   S value is : 60
M value is : 3   S value is : 1
M value is : 3   S value is : 2
M value is : 3   S value is : 3
M value is : 3   S value is : 4
M value is : 3   S value is : 5
M value is : 3   S value is : 6
M value is : 3   S value is : 7
M value is : 3   S value is : 8
M value is : 3   S value is : 9
M value is : 3   S value is : 10
M value is : 3   S value is : 11
M value is : 3   S value is : 12
M value is : 3   S value is : 13
M value is : 3   S value is : 14
M value is : 3   S value is : 15
M value is : 3   S value is : 16
M value is : 3   S value is : 17
M value is : 3   S value is : 18
M value is : 3   S value is : 19
M value is : 3   S value is : 20
M value is : 3   S value is : 21
M value is : 3   S value is : 22
M value is : 3   S value is : 23
M value is : 3   S value is : 24
M value is : 3   S value is : 25
M value is : 3   S value is : 26
M value is : 3   S value is : 27
M value is : 3   S value is : 28
M value is : 3   S value is : 29
M value is : 3   S value is : 30
M value is : 3   S value is : 31
M value is : 3   S value is : 32
M value is : 3   S value is : 33
M value is : 3   S value is : 34
M value is : 3   S value is : 35
M value is : 3   S value is : 36
M value is : 3   S value is : 37
M value is : 3   S value is : 38
M value is : 3   S value is : 39
M value is : 3   S value is : 40
M value is : 3   S value is : 41
M value is : 3   S value is : 42
M value is : 3   S value is : 43
M value is : 3   S value is : 44
M value is : 3   S value is : 45
M value is : 3   S value is : 46
M value is : 3   S value is : 47
M value is : 3   S value is : 48
M value is : 3   S value is : 49
M value is : 3   S value is : 50
M value is : 3   S value is : 51
M value is : 3   S value is : 52
M value is : 3   S value is : 53
M value is : 3   S value is : 54
M value is : 3   S value is : 55
M value is : 3   S value is : 56
M value is : 3   S value is : 57
M value is : 3   S value is : 58
M value is : 3   S value is : 59
M value is : 3   S value is : 60
M value is : 4   S value is : 1
M value is : 4   S value is : 2
M value is : 4   S value is : 3
M value is : 4   S value is : 4
M value is : 4   S value is : 5
M value is : 4   S value is : 6
M value is : 4   S value is : 7
M value is : 4   S value is : 8
M value is : 4   S value is : 9
M value is : 4   S value is : 10
M value is : 4   S value is : 11
M value is : 4   S value is : 12
M value is : 4   S value is : 13
M value is : 4   S value is : 14
M value is : 4   S value is : 15
M value is : 4   S value is : 16
M value is : 4   S value is : 17
M value is : 4   S value is : 18
M value is : 4   S value is : 19
M value is : 4   S value is : 20
M value is : 4   S value is : 21
M value is : 4   S value is : 22
M value is : 4   S value is : 23
M value is : 4   S value is : 24
M value is : 4   S value is : 25
M value is : 4   S value is : 26
M value is : 4   S value is : 27
M value is : 4   S value is : 28
M value is : 4   S value is : 29
M value is : 4   S value is : 30
M value is : 4   S value is : 31
M value is : 4   S value is : 32
M value is : 4   S value is : 33
M value is : 4   S value is : 34
M value is : 4   S value is : 35
M value is : 4   S value is : 36
M value is : 4   S value is : 37
M value is : 4   S value is : 38
M value is : 4   S value is : 39
M value is : 4   S value is : 40
M value is : 4   S value is : 41
M value is : 4   S value is : 42
M value is : 4   S value is : 43
M value is : 4   S value is : 44
M value is : 4   S value is : 45
M value is : 4   S value is : 46
M value is : 4   S value is : 47
M value is : 4   S value is : 48
M value is : 4   S value is : 49
M value is : 4   S value is : 50
M value is : 4   S value is : 51
M value is : 4   S value is : 52
M value is : 4   S value is : 53
M value is : 4   S value is : 54
M value is : 4   S value is : 55
M value is : 4   S value is : 56
M value is : 4   S value is : 57
M value is : 4   S value is : 58
M value is : 4   S value is : 59
M value is : 4   S value is : 60
M value is : 5   S value is : 1
M value is : 5   S value is : 2
M value is : 5   S value is : 3
M value is : 5   S value is : 4
M value is : 5   S value is : 5
M value is : 5   S value is : 6
M value is : 5   S value is : 7
M value is : 5   S value is : 8
M value is : 5   S value is : 9
M value is : 5   S value is : 10
M value is : 5   S value is : 11
M value is : 5   S value is : 12
M value is : 5   S value is : 13
M value is : 5   S value is : 14
M value is : 5   S value is : 15
M value is : 5   S value is : 16
M value is : 5   S value is : 17
M value is : 5   S value is : 18
M value is : 5   S value is : 19
M value is : 5   S value is : 20
M value is : 5   S value is : 21
M value is : 5   S value is : 22
M value is : 5   S value is : 23
M value is : 5   S value is : 24
M value is : 5   S value is : 25
M value is : 5   S value is : 26
M value is : 5   S value is : 27
M value is : 5   S value is : 28
M value is : 5   S value is : 29
M value is : 5   S value is : 30
M value is : 5   S value is : 31
M value is : 5   S value is : 32
M value is : 5   S value is : 33
M value is : 5   S value is : 34
M value is : 5   S value is : 35
M value is : 5   S value is : 36
M value is : 5   S value is : 37
M value is : 5   S value is : 38
M value is : 5   S value is : 39
M value is : 5   S value is : 40
M value is : 5   S value is : 41
M value is : 5   S value is : 42
M value is : 5   S value is : 43
M value is : 5   S value is : 44
M value is : 5   S value is : 45
M value is : 5   S value is : 46
M value is : 5   S value is : 47
M value is : 5   S value is : 48
M value is : 5   S value is : 49
M value is : 5   S value is : 50
M value is : 5   S value is : 51
M value is : 5   S value is : 52
M value is : 5   S value is : 53
M value is : 5   S value is : 54
M value is : 5   S value is : 55
M value is : 5   S value is : 56
M value is : 5   S value is : 57
M value is : 5   S value is : 58
M value is : 5   S value is : 59
M value is : 5   S value is : 60
PS D:\Learning_Playwright\Basic_JavaScript\Day15NestedforloopBreakContinue> npx tsx NFL3.ts
M value is : 1 ,  S value is : 1
M value is : 1 ,  S value is : 2
M value is : 1 ,  S value is : 3
M value is : 1 ,  S value is : 4
M value is : 1 ,  S value is : 5
M value is : 1 ,  S value is : 6
M value is : 1 ,  S value is : 7
M value is : 1 ,  S value is : 8
M value is : 1 ,  S value is : 9
M value is : 1 ,  S value is : 10
M value is : 1 ,  S value is : 11
M value is : 1 ,  S value is : 12
M value is : 1 ,  S value is : 13
M value is : 1 ,  S value is : 14
M value is : 1 ,  S value is : 15
M value is : 1 ,  S value is : 16
M value is : 1 ,  S value is : 17
M value is : 1 ,  S value is : 18
M value is : 1 ,  S value is : 19
M value is : 1 ,  S value is : 20
M value is : 1 ,  S value is : 21
M value is : 1 ,  S value is : 22
M value is : 1 ,  S value is : 23
M value is : 1 ,  S value is : 24
M value is : 1 ,  S value is : 25
M value is : 1 ,  S value is : 26
M value is : 1 ,  S value is : 27
M value is : 1 ,  S value is : 28
M value is : 1 ,  S value is : 29
M value is : 1 ,  S value is : 30
M value is : 1 ,  S value is : 31
M value is : 1 ,  S value is : 32
M value is : 1 ,  S value is : 33
M value is : 1 ,  S value is : 34
M value is : 1 ,  S value is : 35
M value is : 1 ,  S value is : 36
M value is : 1 ,  S value is : 37
M value is : 1 ,  S value is : 38
M value is : 1 ,  S value is : 39
M value is : 1 ,  S value is : 40
M value is : 1 ,  S value is : 41
M value is : 1 ,  S value is : 42
M value is : 1 ,  S value is : 43
M value is : 1 ,  S value is : 44
M value is : 1 ,  S value is : 45
M value is : 1 ,  S value is : 46
M value is : 1 ,  S value is : 47
M value is : 1 ,  S value is : 48
M value is : 1 ,  S value is : 49
M value is : 1 ,  S value is : 50
M value is : 1 ,  S value is : 51
M value is : 1 ,  S value is : 52
M value is : 1 ,  S value is : 53
M value is : 1 ,  S value is : 54
M value is : 1 ,  S value is : 55
M value is : 1 ,  S value is : 56
M value is : 1 ,  S value is : 57
M value is : 1 ,  S value is : 58
M value is : 1 ,  S value is : 59
M value is : 1 ,  S value is : 60
M value is : 2 ,  S value is : 1
M value is : 2 ,  S value is : 2
M value is : 2 ,  S value is : 3
M value is : 2 ,  S value is : 4
M value is : 2 ,  S value is : 5
M value is : 2 ,  S value is : 6
M value is : 2 ,  S value is : 7
M value is : 2 ,  S value is : 8
M value is : 2 ,  S value is : 9
M value is : 2 ,  S value is : 10
M value is : 2 ,  S value is : 11
M value is : 2 ,  S value is : 12
M value is : 2 ,  S value is : 13
M value is : 2 ,  S value is : 14
M value is : 2 ,  S value is : 15
M value is : 2 ,  S value is : 16
M value is : 2 ,  S value is : 17
M value is : 2 ,  S value is : 18
M value is : 2 ,  S value is : 19
M value is : 2 ,  S value is : 20
M value is : 2 ,  S value is : 21
M value is : 2 ,  S value is : 22
M value is : 2 ,  S value is : 23
M value is : 2 ,  S value is : 24
M value is : 2 ,  S value is : 25
M value is : 2 ,  S value is : 26
M value is : 2 ,  S value is : 27
M value is : 2 ,  S value is : 28
M value is : 2 ,  S value is : 29
M value is : 2 ,  S value is : 30
M value is : 2 ,  S value is : 31
M value is : 2 ,  S value is : 32
M value is : 2 ,  S value is : 33
M value is : 2 ,  S value is : 34
M value is : 2 ,  S value is : 35
M value is : 2 ,  S value is : 36
M value is : 2 ,  S value is : 37
M value is : 2 ,  S value is : 38
M value is : 2 ,  S value is : 39
M value is : 2 ,  S value is : 40
M value is : 2 ,  S value is : 41
M value is : 2 ,  S value is : 42
M value is : 2 ,  S value is : 43
M value is : 2 ,  S value is : 44
M value is : 2 ,  S value is : 45
M value is : 2 ,  S value is : 46
M value is : 2 ,  S value is : 47
M value is : 2 ,  S value is : 48
M value is : 2 ,  S value is : 49
M value is : 2 ,  S value is : 50
M value is : 2 ,  S value is : 51
M value is : 2 ,  S value is : 52
M value is : 2 ,  S value is : 53
M value is : 2 ,  S value is : 54
M value is : 2 ,  S value is : 55
M value is : 2 ,  S value is : 56
M value is : 2 ,  S value is : 57
M value is : 2 ,  S value is : 58
M value is : 2 ,  S value is : 59
M value is : 2 ,  S value is : 60
M value is : 3 ,  S value is : 1
M value is : 3 ,  S value is : 2
M value is : 3 ,  S value is : 3
M value is : 3 ,  S value is : 4
M value is : 3 ,  S value is : 5
M value is : 3 ,  S value is : 6
M value is : 3 ,  S value is : 7
M value is : 3 ,  S value is : 8
M value is : 3 ,  S value is : 9
M value is : 3 ,  S value is : 10
M value is : 3 ,  S value is : 11
M value is : 3 ,  S value is : 12
M value is : 3 ,  S value is : 13
M value is : 3 ,  S value is : 14
M value is : 3 ,  S value is : 15
M value is : 3 ,  S value is : 16
M value is : 3 ,  S value is : 17
M value is : 3 ,  S value is : 18
M value is : 3 ,  S value is : 19
M value is : 3 ,  S value is : 20
M value is : 3 ,  S value is : 21
M value is : 3 ,  S value is : 22
M value is : 3 ,  S value is : 23
M value is : 3 ,  S value is : 24
M value is : 3 ,  S value is : 25
M value is : 3 ,  S value is : 26
M value is : 3 ,  S value is : 27
M value is : 3 ,  S value is : 28
M value is : 3 ,  S value is : 29
M value is : 3 ,  S value is : 30
M value is : 3 ,  S value is : 31
M value is : 3 ,  S value is : 32
M value is : 3 ,  S value is : 33
M value is : 3 ,  S value is : 34
M value is : 3 ,  S value is : 35
M value is : 3 ,  S value is : 36
M value is : 3 ,  S value is : 37
M value is : 3 ,  S value is : 38
M value is : 3 ,  S value is : 39
M value is : 3 ,  S value is : 40
M value is : 3 ,  S value is : 41
M value is : 3 ,  S value is : 42
M value is : 3 ,  S value is : 43
M value is : 3 ,  S value is : 44
M value is : 3 ,  S value is : 45
M value is : 3 ,  S value is : 46
M value is : 3 ,  S value is : 47
M value is : 3 ,  S value is : 48
M value is : 3 ,  S value is : 49
M value is : 3 ,  S value is : 50
M value is : 3 ,  S value is : 51
M value is : 3 ,  S value is : 52
M value is : 3 ,  S value is : 53
M value is : 3 ,  S value is : 54
M value is : 3 ,  S value is : 55
M value is : 3 ,  S value is : 56
M value is : 3 ,  S value is : 57
M value is : 3 ,  S value is : 58
M value is : 3 ,  S value is : 59
M value is : 3 ,  S value is : 60
M value is : 4 ,  S value is : 1
M value is : 4 ,  S value is : 2
M value is : 4 ,  S value is : 3
M value is : 4 ,  S value is : 4
M value is : 4 ,  S value is : 5
M value is : 4 ,  S value is : 6
M value is : 4 ,  S value is : 7
M value is : 4 ,  S value is : 8
M value is : 4 ,  S value is : 9
M value is : 4 ,  S value is : 10
M value is : 4 ,  S value is : 11
M value is : 4 ,  S value is : 12
M value is : 4 ,  S value is : 13
M value is : 4 ,  S value is : 14
M value is : 4 ,  S value is : 15
M value is : 4 ,  S value is : 16
M value is : 4 ,  S value is : 17
M value is : 4 ,  S value is : 18
M value is : 4 ,  S value is : 19
M value is : 4 ,  S value is : 20
M value is : 4 ,  S value is : 21
M value is : 4 ,  S value is : 22
M value is : 4 ,  S value is : 23
M value is : 4 ,  S value is : 24
M value is : 4 ,  S value is : 25
M value is : 4 ,  S value is : 26
M value is : 4 ,  S value is : 27
M value is : 4 ,  S value is : 28
M value is : 4 ,  S value is : 29
M value is : 4 ,  S value is : 30
M value is : 4 ,  S value is : 31
M value is : 4 ,  S value is : 32
M value is : 4 ,  S value is : 33
M value is : 4 ,  S value is : 34
M value is : 4 ,  S value is : 35
M value is : 4 ,  S value is : 36
M value is : 4 ,  S value is : 37
M value is : 4 ,  S value is : 38
M value is : 4 ,  S value is : 39
M value is : 4 ,  S value is : 40
M value is : 4 ,  S value is : 41
M value is : 4 ,  S value is : 42
M value is : 4 ,  S value is : 43
M value is : 4 ,  S value is : 44
M value is : 4 ,  S value is : 45
M value is : 4 ,  S value is : 46
M value is : 4 ,  S value is : 47
M value is : 4 ,  S value is : 48
M value is : 4 ,  S value is : 49
M value is : 4 ,  S value is : 50
M value is : 4 ,  S value is : 51
M value is : 4 ,  S value is : 52
M value is : 4 ,  S value is : 53
M value is : 4 ,  S value is : 54
M value is : 4 ,  S value is : 55
M value is : 4 ,  S value is : 56
M value is : 4 ,  S value is : 57
M value is : 4 ,  S value is : 58
M value is : 4 ,  S value is : 59
M value is : 4 ,  S value is : 60
M value is : 5 ,  S value is : 1
M value is : 5 ,  S value is : 2
M value is : 5 ,  S value is : 3
M value is : 5 ,  S value is : 4
M value is : 5 ,  S value is : 5
M value is : 5 ,  S value is : 6
M value is : 5 ,  S value is : 7
M value is : 5 ,  S value is : 8
M value is : 5 ,  S value is : 9
M value is : 5 ,  S value is : 10
M value is : 5 ,  S value is : 11
M value is : 5 ,  S value is : 12
M value is : 5 ,  S value is : 13
M value is : 5 ,  S value is : 14
M value is : 5 ,  S value is : 15
M value is : 5 ,  S value is : 16
M value is : 5 ,  S value is : 17
M value is : 5 ,  S value is : 18
M value is : 5 ,  S value is : 19
M value is : 5 ,  S value is : 20
M value is : 5 ,  S value is : 21
M value is : 5 ,  S value is : 22
M value is : 5 ,  S value is : 23
M value is : 5 ,  S value is : 24
M value is : 5 ,  S value is : 25
M value is : 5 ,  S value is : 26
M value is : 5 ,  S value is : 27
M value is : 5 ,  S value is : 28
M value is : 5 ,  S value is : 29
M value is : 5 ,  S value is : 30
M value is : 5 ,  S value is : 31
M value is : 5 ,  S value is : 32
M value is : 5 ,  S value is : 33
M value is : 5 ,  S value is : 34
M value is : 5 ,  S value is : 35
M value is : 5 ,  S value is : 36
M value is : 5 ,  S value is : 37
M value is : 5 ,  S value is : 38
M value is : 5 ,  S value is : 39
M value is : 5 ,  S value is : 40
M value is : 5 ,  S value is : 41
M value is : 5 ,  S value is : 42
M value is : 5 ,  S value is : 43
M value is : 5 ,  S value is : 44
M value is : 5 ,  S value is : 45
M value is : 5 ,  S value is : 46
M value is : 5 ,  S value is : 47
M value is : 5 ,  S value is : 48
M value is : 5 ,  S value is : 49
M value is : 5 ,  S value is : 50
M value is : 5 ,  S value is : 51
M value is : 5 ,  S value is : 52
M value is : 5 ,  S value is : 53
M value is : 5 ,  S value is : 54
M value is : 5 ,  S value is : 55
M value is : 5 ,  S value is : 56
M value is : 5 ,  S value is : 57
M value is : 5 ,  S value is : 58
M value is : 5 ,  S value is : 59
M value is : 5 ,  S value is : 60
*/