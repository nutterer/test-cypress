## Init project
1. copy .env.example to .env
2. run command
``` > docker-compose up ```
## ENV
- `NODE_ENV`= บอกว่าทำอยู่ develop หรือ production (ex. development)
- `PORT`= port ที่จะใช้ run (ex. http://localhost:8000)
- `VAT`= ค่า VAT ที่มช้ในระบบเวลาคำนวนเงิน (ex. 7)
- `SERVICE_URL`= api base url (ex. http://localhost:8001)

## TEST
### Cypress
run command for open cypress GUI
``` npm cypress open ```