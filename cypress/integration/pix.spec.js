/// <reference types="cypress" />

describe('Cenario de compra com pix', () => {

it('Cenario 02 - Compra de pacote completo com PIX', () => {

    cy.visit('/').viewport(1600,900) // viewreport - corrigir dimensões da tela
    
    cy.title().should('be.equal', 'Teste de DNA para Ancestralidade, Saúde e Bem Estar - Genera')
    cy.wait(2000) //pausa 

    // Aceita os coockies da página
    cy.get('#accept-cookies').click() 
    cy.wait(2000) //pausa 

    // Clica em: compre
    cy.get('#menu-item-36510 > a').click()
    cy.wait(1000) //pausa  
    
    // Clica em: comprar este pacote "pacote completo"
    cy.get(':nth-child(3) > .genera-package > .package-buy-button').click()
    cy.wait(2000) //pausa  
    
    // Escolho o método de processamento
    cy.get('#exam_processing_type_ILLUMINA').check({force : true}) // Testando radiobutton
    cy.wait(2000) //pausa 
    
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
    cy.wait(3000) //pausa 
    
    // Valida texto na página de confirmação.Texto: Entrega e retirada
    cy.get('#resume-total-label-shipping').should('be.visible')
    cy.wait(15000) //pausa
  })

})