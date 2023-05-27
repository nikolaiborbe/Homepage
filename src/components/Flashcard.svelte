<script>
  export let q;
  export let a;
</script>

<div class="flex p-2 justify-center">
  <label class="swap swap-flip text-xl">
    <input type="checkbox" autocomplete="off" />
    <div class="swap-off w-[23rem] h-64 bg-[#0d1117] rounded-3xl">
      <div class="h-full w-full flex text-center">
        <span class="text-zinc-500 text-base p-3 pl-5 absolute">Question</span>
        <p class="w-full justify-self-center self-center px-5">{q}</p>
      </div>
    </div>
    <div class="swap-on w-[23rem] h-64 bg-[#0d1117] rounded-3xl">
      <div class="h-full w-full flex text-center">
        <span class="text-zinc-500 text-base p-3 pl-5 absolute">Answer</span>
        <p class="w-full justify-self-center self-center px-5">{a}</p>
      </div>
    </div>
  </label>
</div>