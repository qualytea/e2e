import * as data from "../helpers/default_data.json"


describe('Проверка авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цыет кнопки восст. пароль
    
          });

    afterEach('Конец теста', function () {
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           }); //Есть крестик и он виден пользователю

    it('Верный пароль и верный логин', function () {
         cy.get('#mail').type(data.login); //ввели верный логин
         cy.get('#pass').type(data.password); //ввели верный пароль
         cy.get('#loginButton').click(); //нажали войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю. что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         
     })
 
     it('Неверный логин и верный пароль', function () {
        cy.get('#mail').type('irsen2005@mail.ru'); //ввели неверный логин
        cy.get('#pass').type(data.password); //ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю. что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин прописными и строчными буквами 
        cy.get('#pass').type(data.password); //ввели верный пароль
        cy.get('#loginButton').click(); //нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверили. что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        
    })

    it('Верный пароль и неверный логин', function () {
         cy.get('#mail').type(data.login); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio7'); //ввели неверный пароль
         cy.get('#loginButton').click(); //нажал войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю. что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         
     })
 

    it('Проверка, что в логине есть @', function () {
         cy.get('#mail').type('germandolnikov.ru'); //ввели логин without @
         cy.get('#pass').type(data.password); //ввели верный пароль
         cy.get('#loginButton').click(); //нажал войти

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю. что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         
     })

     it('Проверка восстановления пароля', function () {
        cy.get('#forgotEmailButton').click(); //нажали восстановить пароль

        cy.get('#mailForgot').type(data.login); //ввели верную почту
        cy.get('#restoreEmailButton').click(); //нажали отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        
    })
 })