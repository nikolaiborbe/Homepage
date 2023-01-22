<script>
    export let q;
    export let a;
</script>

<div class="flex justify-center">
  <label class="swap swap-flip text-xl">
    <input type="checkbox" autocomplete="off"/>
    
    <div class="swap-off w-96 h-64 bg-[#0d1117] rounded-lg">
      <span class="pl-2 text-zinc-500 text-base">Question</span>
      <div class="h-full w-full flex justify-center pt-14">
        <p>{q}</p>
      </div>
    </div>
    <div class="swap-on w-96 h-64 bg-[#0d1117] rounded-lg">
      <span class="pl-2 text-zinc-500 text-base">Answer</span>
      <div class="h-full w-full flex justify-center pt-14">
        <p>{a}</p>
      </div>
    </div>
  </label>
</div>
