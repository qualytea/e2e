describe('Проверка покупки нового аватара', function () { 

    it('e2e тест на покупку нового аватара', function () {
         cy.visit('https://pokemonbattle.ru'); //зашли на сайт
         cy.get('#k_email').type('my@irinakuznetsova.ru'); //ввели верный логин
         cy.get('#k_password').type('re123WJDF'); //ввели верный пароль
         cy.get('.MuiButton-root').click(); //нажали войти
         cy.wait(2000);
         cy.get('.header_card_trainer').click (); // нажали на своего тренера
         cy.wait(5000);
         cy.get('.k_mobile > :nth-child(5)').click (); // нажали на кнопку смена аватара
         cy.get('.available > button').first().click();   // кликнули купить у первого доступного аватара
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type ('4620869113632996'); //ввели номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1226'); //вводим дату
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type ('125'); //ввели CVV
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('GERMAN DOLNIKOV'); // ввели имя владельца карты
         cy.wait (2000);
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажали оплатить
         cy.get('.style_1_base_input').type('56456'); // ввели сод из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // видим сообщение об успешной покупке
         cy.contains('Покупка прошла успешно').should('be.visible');

        });

    
    
        







             
       

    });
