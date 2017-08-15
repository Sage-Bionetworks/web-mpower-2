<template>


  <div class="page-overview">

    <div class="row">

      <div class="col-sm-5 col-12">
        <img src="../assets/check.png" class="img-fluid"  alt="image of a check marked circle">
      </div>

      <div class="col-sm-7 text-left">
        <p class="large"> Congratulations, you're eligible! </p>
        <p class="lead"> It's now time for consent, how does it work? </p>
        <p class="lead tiny light">
          There will be 13 sections in the consent process. These
          sections will help you to understand what is involved and how the study will
          work, After the consent introduction, there will be a short quiz on what
          you have learned about the study.
        </p>
        <br>
        <button class="col-md-9 col-12 tiny" id="walkthrough" > Review Consent </button>

      </div>
    </div>

  </div>

</template>


<script>
  export default {
    name: 'congratulations'
  }
</script>
