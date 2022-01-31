/// <reference types="cypress" />

describe('Cenarios de compra', () => {


    it('Cenario 01 - Compra de pacote basico com cartão de credito', () => {
        cy.visit('https://www.genera.com.br/').viewport(1600,900) // viewreport - corrigir dimensões da tela

        cy.title().should('be.equal', 'Teste de DNA para Ancestralidade, Saúde e Bem Estar - Genera')
        cy.wait(1000) //pausa

        // Clica em: compre
        cy.get('#menu-item-36510 > a').click() 

        // Clica em: comprar este pacote "pacote basico"
        cy.get(':nth-child(1) > .genera-package > .package-buy-button').click() 
        
        // Escolho o método de processamento
        cy.get('#exam_processing_type_THERMO').check({force : true}) // Testando radiobutton
        
        // Identificação
        cy.get('#billing_full_name').type('Wilson Souza')
        cy.get('#billing_email').type('wilsonsouza83@yahoo.com.br')
        cy.get('#billing_phone').type('11983230756')
        cy.get('#billing_cpf').type('31169143890')
        cy.wait(2000) //pausa
              
        // Endereço para entrega e retirada do kit
        cy.get('#shipping_postcode').type('04773-000')
        cy.get('#shipping_city').type('São Paulo')
        cy.get('#billing_state').select('SP') // Autocomplete value="SP"
        cy.get('#shipping_number_field > label').type('462')  //.check({force : true}) - ,'#billing_number'
        cy.wait(2000) //pausa
    
        // Escolho a forma de pagamento
        cy.get('.payment_method_pagarme-credit-card > label > .content').click()

        // Digito os dados do cartão
        cy.get('#pagarme-card-number').type('5502 0965 5892 5400')
        cy.get('#pagarme-card-expiry_field > label').type('12/27')
        cy.get('#pagarme-card-cvc').type('269')
        cy.get('#pagarme-card-holder-name').type('WILSON F SOUZA')
        
        // Escolhendo o número de parcelas
        cy.get('#pagarme-card-installments').select('2')  
        cy.wait(2000) //pausa

        // Mesmo endereço de entrega
        cy.get('#billing_equal_shipping_field > label > .content').click()
        cy.wait(2000) //pausa

        // Aceite dos termos e consições do site
        cy.get('#terms').check({force : true})
        cy.wait(2000) //pausa

        // Finalizar a compra
        cy.get('#place_order').click()
        cy.wait(3000) //pausa
      })

     
      it('Cenario 02 - Compra de pacote completo com PIX', () => {
      cy.visit('https://www.genera.com.br/').viewport(1600,900) // viewreport - corrigir dimensões da tela
  
      cy.title().should('be.equal', 'Teste de DNA para Ancestralidade, Saúde e Bem Estar - Genera')
      cy.wait(1000) //pausa 

      // Aceita os coockies da página
      cy.get('#accept-cookies').click() 
      cy.wait(1000) //pausa 
  
      // Clica em: compre
      cy.get('#menu-item-36510 > a').click() 
      
      // Clica em: comprar este pacote "pacote completo"
      cy.get(':nth-child(3) > .genera-package > .package-buy-button').click() 
      
      // Escolho o método de processamento
      cy.get('#exam_processing_type_ILLUMINA').check({force : true}) // Testando radiobutton
      
      // Identificação
      cy.get('#billing_full_name').type('Wilson Souza')
      cy.get('#billing_email').type('wilsonsouza83@yahoo.com.br')
      cy.get('#billing_phone').type('11983230756')
      cy.get('#billing_cpf').type('31169143890')
      cy.wait(3000) //pausa 
            
      // Endereço para entrega e retirada do kit
      cy.get('#shipping_postcode').type('04773-000')
      cy.get('#shipping_city').type('São Paulo')
      cy.get('#billing_state').select('SP') // Autocomplete value="SP"
      cy.get('#shipping_number_field > label').type('462')  //.check({force : true}) - ,'#billing_number'
      cy.wait(3000) //pausa 
  
      // Escolho a forma de pagamento
      cy.get('.payment_method_wc-aarin-pix > label > .content').click()
      cy.wait(3000) //pausa 
  
      // Mesmo endereço de entrega
      cy.get('#billing_equal_shipping_field > label > .content').click()
      cy.wait(3000) //pausa 
  
      // Aceite dos termos e consições do site
      cy.get('#terms').check({force : true})
      cy.wait(3000) //pausa 
  
      // Finalizar a compra
      cy.get('#place_order').click()
    })
  })
        

