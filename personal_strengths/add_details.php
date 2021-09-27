<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Ik voel me goed/sterk als...</h1>
    <p>
        Alle ervaringen hebben we verwerkt in een zin. Het is nu aan jouw om ze goed lopend en kloppend te maken.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Ervaring <span id="personal-strength-index"></span> van <span id="personal-strength-count"></span></h2>

            <label class="form-status hidden"></label>

            <label>Ik voel me goed of sterk wanneer...</label>
            <textarea id="personal-strength-action"></textarea>

            <label>tijdens...</label>
            <textarea id="personal-strength-moment"></textarea>

            <label>en ik dit denk...</label>
            <textarea id="personal-strength-thought"></textarea>

            <label>en ik me... </label>
            <textarea id="personal-strength-feeling"></textarea>
            <label id="label_feeling">voel,</label>

            <label id="personal-strength-ending_label">met als resultaat dat...</label>
            <textarea id="personal-strength-ending"></textarea>
        </div>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button" href="/personal_strengths/intro.php" onclick="return previousPersonalStrength()">Vorige</a>
    </div>

    <div class="middle">
    </div>

    <div class="right">
        <a class="button" href="/personal_strengths/add_details.php"
            onclick="return nextPersonalStrength()">Volgende</a>
    </div>
</div>

<script>
    getCurrentPersonalStrength();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>