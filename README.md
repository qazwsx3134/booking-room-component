# Overview

### How to run

1. npm install
2. npm run build:dev
3. npm run start

or

1. npm install
2. npm run build:prod
3. npm run start

### Environment

1. Node v16.15.0

### Library

1. react
2. typescript

### UI color

Blue #54D4EE
Border Gray #F0F0F0
Light Gray #D3D3D3
Dark Gray #A9A9A9
Notification text #848484
Notification section #F0FDFF

### Support Browsers

- [v] Chrome
- [] IE 11
- [v] Firefox
- [v] Edge

### Icon

Using figma to create icon

- [v] plus
- [v] minus

### Props

#### RoomAllocation
| Name        | Type                        | Default | Required? | Description                                                                                                       |
| ----------- | --------------------------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| guest          | number                      |         | true     | The people will live in                                                             |
| room | number                      |         | true     | The quantity of room that people will live in |
| onChange  | function(result) |         | yes       | It's the callback will given result                                          |