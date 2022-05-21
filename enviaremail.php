<?php

    header("Content-type: text/html; charset=utf-8");
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $nome = $_POST["nome"];
        $fone = $_POST["telefone"];
		$email = $_POST["email"];
        $mensagem = $_POST["mensagem"];

        // Set the recipient email address.
        $recipient = "contato@trynweb.com, jeanleles.sa@gmail.com";

        // Set the email subject.
        $subject = "Nova Mensagem do Site";

        // Build the email content.
        $email_content = "Nome: $nome\n";
		$email_content .= "Telefone: $fone\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Mensagem:\n$mensagem\n";

        // Build the email headers.
        $email_headers = "De: $nome";


        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
           var_dump(http_response_code(200));
            echo "Obrigado! Sua mensagem foi enviada com sucesso.";					
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Algo deu errdao ao tentar enviar sua mensagem.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Algo deu errado ao tentar enviar sua mensagem, tente novamente.";
    }

?>
