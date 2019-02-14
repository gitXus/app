baseURL: http://129.28.100.33:8000
登录接口
api: /login
method: POST
params:
   -phoneNumber [string]
   -password [string]

注册接口
api: /register
method: POST
params:
   -phoneNumber [string]
   -password [string]
   isAgree [boolean]
   validCode [string]
