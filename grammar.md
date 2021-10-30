## Gramar

    E:= TX
    X:= +TX | λ
    T:= FY
    Y:= -FY | λ
    F:= 1 | (E)


## CONJUNTO FIRST E FOLLOW

VAR | FIRST | FOLLOW
----|-------|----------
E | { 1, ( } | { $, ) }
F | {1, ( } | { $, ), +, - }
T | {1, ( } | { $, ), + }
X | { λ, +}     | { $, ) }
Y | { λ, - }    | { $, ), + }



