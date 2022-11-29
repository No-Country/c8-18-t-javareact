package com.nocontry.ecommerce.exception;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.nocontry.ecommerce.rest.dto.response.ErrorResponse;


@ControllerAdvice
public class DefaultExceptionHandler {
    private static final String DEFAULT_ERROR_MESSAGE = "Ha ocurrido un error inesperado";
    private static final String ERROR_MESSAGE_NOT_FOUND = "No se ha encontrado el recurso solicitado";
    private static final String ERROR_MESSAGE_ALREADY_EXISTS = "El recurso ya existe";
    private static final String ERROR_MESSAGE_IN_USE = "El recurso esta en uso";
    private static final String ERROR_MESSAGE_INVALID_CREDENTIALS = "Credenciales invalidas";

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception e) {
        ErrorResponse errorResponse = buildError(HttpStatus.BAD_REQUEST,
                DEFAULT_ERROR_MESSAGE,
                e.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(value = NotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFoundException(NotFoundException e) {
        ErrorResponse errorResponse = buildError(HttpStatus.NOT_FOUND,
                ERROR_MESSAGE_NOT_FOUND,
                e.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(value = AlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleAlreadyExistsException(AlreadyExistsException e) {
        ErrorResponse errorResponse = buildError(HttpStatus.CONFLICT,
                ERROR_MESSAGE_ALREADY_EXISTS,
                e.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }
    @ExceptionHandler(value = DefaultException.class)
    public ResponseEntity<ErrorResponse> handleInUseException(DefaultException e) {
        ErrorResponse errorResponse = buildError(HttpStatus.CONFLICT,
                ERROR_MESSAGE_IN_USE,
                e.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }
    @ExceptionHandler(value = InvalidCredentialsException.class)
    public ResponseEntity<ErrorResponse> handleInvalidCredentialsException(InvalidCredentialsException e) {
        ErrorResponse errorResponse = buildError(HttpStatus.UNAUTHORIZED,
                ERROR_MESSAGE_INVALID_CREDENTIALS,
                e.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    }
    private ErrorResponse buildError(HttpStatus httpStatus, String message, List<String> moreInfo) {
        return ErrorResponse.builder()
                .statusCode(httpStatus.value())
                .message(message)
                .moreInfo(moreInfo)
                .build();
    }
    private ErrorResponse buildError(HttpStatus httpStatus, String message, String moreInfo) {
        return buildError(httpStatus, message, List.of(moreInfo));
    }
}