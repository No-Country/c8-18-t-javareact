
package com.nocontry.ecommerce.exception;


public class MyException extends Exception{
    
    public MyException(String msg){
        super(msg);
    }

    public MyException() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
