import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import ModalPortal from '../'
import './class.test.css'

const childrenContent = 'is Testing'

describe('Modal Portal testing',()=>{
    beforeEach(()=>{
        render(<div id="root" ></div>)
    })
    it('shows the children', ()=>{
        
        const content = render(<ModalPortal state={false} >{childrenContent}</ModalPortal>)
        const getiDGet=content.getByText(childrenContent)
        expect(getiDGet).toHaveTextContent('is Testing')
        expect(screen.queryByText(childrenContent)).toHaveTextContent('Testing')

    })
    it('Open & Close Modal Portal',()=>{

        const content = render(<ModalPortal state={true} >{childrenContent}</ModalPortal>)
        const contentModelPortal=screen.getByTestId('modal-id')

        expect(contentModelPortal).toHaveClass('activeModal')
        const buttonCloseModal =content.getByText('CLOSE')
        fireEvent.click(buttonCloseModal)
        
        expect(contentModelPortal).toHaveClass('disableModal')      
        expect(contentModelPortal).not.toHaveClass('activeModal')  
    })
    it('Close Modal Portal by clicking outside the Modal window',()=>{
        const handler = jest.fn()
        const content = render(<ModalPortal state={true}  onBtnClose={handler} >{childrenContent}</ModalPortal>)

        const elementOusidePortal = content.getByTestId('modal-id')
        // Modal Portal is ACTIVE?
        expect(elementOusidePortal).toHaveClass('activeModal')
        // On Click outside thi windows, closed PORTAL?
        fireEvent.click(elementOusidePortal)

        // Is Closed!
        expect(elementOusidePortal).toHaveClass('disableModal')   
        // Call Function props, Did you call the function?
        expect(handler.mock.calls).toHaveLength(1)
    })
    it('Call function in props component modal',()=>{
        const handler = jest.fn()
        const content = render(<ModalPortal state={true}  onBtnClose={handler}  >{childrenContent}</ModalPortal>)

        const buttonCloseModal =content.getByText('CLOSE')
        fireEvent.click(buttonCloseModal)
        expect(handler.mock.calls).toHaveLength(1)

    })
    it('Call Button CLose',()=>{
        const handlerClose = jest.fn()

        const nameBtn={cancel:'Button CLOSING TESTING'}
        const content = render(<ModalPortal state={true}  onBtnOkey={()=>{}} onBtnClose={handlerClose} nameBtn={nameBtn}    >{childrenContent}</ModalPortal>)

        const buttonBtnClose =content.getByText('Button CLOSING TESTING')
        expect(buttonBtnClose).toBeVisible()
        fireEvent.click(buttonBtnClose)
        expect(handlerClose.mock.calls).toHaveLength(1)

         // is MODAL PORTAL closed? 
         expect(content.getByTestId('modal-id')).toHaveClass('disableModal')
        
    })
    it('Call Button Ok and Close',()=>{

        const handlerOkey = jest.fn()
        const handlerClose = jest.fn()

        const nameBtn={ok:'Button OK TESTING',cancel:'Button Cancel TESTING'}
        const content = render(<ModalPortal state={true}  onBtnOkey={handlerOkey} onBtnClose={handlerClose} nameBtn={nameBtn}    >{childrenContent}</ModalPortal>)
        
        const buttonBtnOkey =content.getByText('Button OK TESTING')
        expect(buttonBtnOkey).toBeVisible()
        fireEvent.click(buttonBtnOkey)
        expect(handlerOkey.mock.calls).toHaveLength(1)
        expect(handlerClose.mock.calls).not.toHaveLength(1)


        const buttonBtnClose =content.getByText('Button Cancel TESTING')
        expect(buttonBtnClose).toBeVisible()
        fireEvent.click(buttonBtnClose)
        expect(handlerClose.mock.calls).toHaveLength(1)
        expect(handlerOkey.mock.calls).not.toHaveLength(0)

        // is MODAL PORTAL closed? 
        expect(content.getByTestId('modal-id')).toHaveClass('disableModal')

        // Class active for two Buttons , to Have Class?
        expect(buttonBtnOkey).toHaveClass("classBtnTwo")
        expect(buttonBtnOkey).not.toHaveClass("classBtnTree")
   

    })
    it('Call Button Second',()=>{

        const handler = jest.fn()
        const handlerAceptar = jest.fn()

        const nameBtn={ok:'Button OK',cancel:'Button Cancel',secondBtn:'Button Testing'}
        const content = render(<ModalPortal state={true}  onBtnOkey={handlerAceptar} onBtnSecond={handler} nameBtn={nameBtn}    >{childrenContent}</ModalPortal>)
        
        const buttonBtnSecond =content.getByText('Button Testing')
        expect(buttonBtnSecond).toBeVisible()
        fireEvent.click(buttonBtnSecond)
        expect(handler.mock.calls).toHaveLength(1)

        expect(handlerAceptar.mock.calls).not.toHaveLength(1)

        // Class active for tree Buttons , to Have Class?
        expect(buttonBtnSecond).toHaveClass("classBtnTree")
        expect(buttonBtnSecond).not.toHaveClass("classBtnTwo")

    })

    it('Call Button Third',()=>{

        const handler = jest.fn()
        const handlerAceptar = jest.fn()

        const nameBtn={ok:'Button OK',cancel:'Button Cancel',thirdBtn:'Button Testing'}
        const content = render(<ModalPortal state={true}  onBtnOkey={handlerAceptar} onBtnThird={handler} nameBtn={nameBtn}    >{childrenContent}</ModalPortal>)
        
        const buttonthirdBtn =content.getByText('Button Testing')
        expect(buttonthirdBtn).toBeVisible()
        fireEvent.click(buttonthirdBtn)
        expect(handler.mock.calls).toHaveLength(1)

        expect(handlerAceptar.mock.calls).not.toHaveLength(1)

        // Class active for tree Buttons , to Have Class?
        expect(buttonthirdBtn).toHaveClass("classBtnTree")
        expect(buttonthirdBtn).not.toHaveClass("classBtnTwo")

    })


    it('Props nameBtn change in values in buttons',()=>{
        const handler = jest.fn()
        const nameBtn={ok:'Button OK',cancel:'Button Cancel',secondBtn:'Button Second',thirdBtn:'Button Testing'}
        const content = render(<ModalPortal state={true} onBtnOkey={handler} nameBtn={nameBtn}    >{childrenContent}</ModalPortal>)
        
        const butonIsOk =content.getByText('Button OK')
        expect(butonIsOk).toBeVisible()
        fireEvent.click(butonIsOk)
        expect(handler.mock.calls).toHaveLength(1)

        const butonIsCancel =content.getByText('Button Cancel')
        expect(butonIsCancel).toBeVisible()

        const butonIsSecond =content.getByText('Button Second')
        expect(butonIsSecond).toBeVisible()

        const butonIsthir =content.getByText('Button Testing')
        expect(butonIsthir).toBeVisible()

        // Class active for four Buttons , to Have Class?
        expect(butonIsthir).toHaveClass("classBtnFour")
        expect(butonIsthir).not.toHaveClass("classBtnTwo")

    })
    it('Children and Title contect HTMLElement render',async ()=>{
        const titleHTML = <h4>Hi testing Tittle</h4>
        const childrenHTML=<div><h1>Content is H1 BIG TESTING</h1></div>
        const content=render(<ModalPortal state={true}  title={titleHTML} >{childrenHTML}</ModalPortal>)
    
       const contentTitle=content.getByTestId('modal-title')
       expect(contentTitle).toContainHTML('<h4>Hi testing Tittle</h4>')

       const contentBody=content.getByText('Content is H1 BIG TESTING')
       expect(contentBody).toContainHTML('<h1>Content is H1 BIG TESTING</h1>')

    })
    it('Class in Footer Element',async ()=>{
     
        const content=render(<ModalPortal state={true}  classNameFooter="modal-footer-reaxio-testing" >{childrenContent}</ModalPortal>)
    
        const butonCloseFooter =content.getByText('CLOSE')
        expect(butonCloseFooter.parentElement).toHaveClass("modal-footer-reaxio-testing")
        expect(butonCloseFooter).not.toHaveClass("modal-footer-reaxio-testing")

    })

})

