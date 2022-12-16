# WeGoJim
 
# Gym Community  
- An platform that connects gym users together.  
- Share your daily workouts and stay updated with your gym buddies.  
- Amazing experience.  
# Images  
![login](https://user-images.githubusercontent.com/73129625/208196353-c827f4f6-9d4b-4cd5-9436-351ea5eab822.PNG)
## API Reference

#### Log In; Get user to authenticate

```http
  GET /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username`     | `string` | **Required**. |
| `password`     | `string` | **Required**. |


#### Sign In; Using get to store new user

```http
  GET /api/auth/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`   | `string` | **Required**.  |
| `email`      | `string` | **Required correct format**.
| `password`      | `string` | **Required** is crypted.
