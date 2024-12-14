<script>
    $(document).ready(function () {
        $("#registrationForm").on("submit", function (e) {
            e.preventDefault(); // Prevent the form from submitting normally
            
            // Send data via AJAX
            $.ajax({
                url: "submit.php",
                type: "POST",
                data: $(this).serialize(),
                success: function (response) {
                    $("#result").html(response); // Display the result in the "result" div
                },
                error: function () {
                    alert("An error occurred. Please try again.");
                }
            });
        });
    });
</script>
