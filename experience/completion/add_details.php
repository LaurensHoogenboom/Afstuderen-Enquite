<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Ervaringen</h1>
    <p>
        Momenten ervaar je. Een ervaring bestaat uit wat er gebeurde, je dacht, je voelde en deed. Iets in deze
        ervaring zorgde ervoor dat je jezelf wel of niet zeker voelde over de situatie.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Moment <span id="experience-index"></span> van <span id="experience-count"></span></h2>

            <p id="experience-description">moment beschrijving</p>

            <label class="form-status hidden"></label>

            <label>Wat dacht je tijdens dit moment? *</label>
            <textarea id="experience-thought" required></textarea>

            <label>Hoe voelde je? *</label>
            <select id="experience-feeling" onchange="toggleFeelingInput()">
                <option selected disabled hidden>Kies een gevoel</option>
                <option value="happy">Blij</option>
                <option value="afraid">Bang</option>
                <option value="angry">Boos</option>
                <option value="sad">Bedroefd</option>
                <option value="custom">Anders, namelijk...</option>
            </select>

            <textarea id="experience-feeling-custom" class="hidden"></textarea>

            <label>Wat was jouw rol in dit moment? *</label>
            <textarea id="experience-action" required></textarea>

            <label>Hoe eindigde het?</label>
            <textarea id="experience-ending"></textarea>
        </div>
        <label>* verplicht veld</label>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/completion/intro.php" for="submit_experience_form" onclick="return previousExperience()">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/personal_strengths/intro.php" for="submit_experience_form" onclick="return nextExperience()">Volgende</a>
    </div>
</div>

<script>
    getCurrentExperience();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>