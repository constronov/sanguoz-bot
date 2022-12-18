(async () => {
  const PAUSE_BETWEEN = 2 * 1000;
  const PAUSE_TAB = 10 * 1000;
  const PAUSE_MINING = 20 * 1000;


  while (1) {
    //
    // Manage Main-Screen
    //
    const menuBattleship = document.querySelector("#army_box_btn");
    if (menuBattleship != null) {menuBattleship.click();}

    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    // Daily Claim
    const flipDaily = document.querySelector("#expand_status");
    if (flipDaily != null) {flipDaily.click();}
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    // TODO Daily
    console.log("TODO");

    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
    if (flipDaily != null) {flipDaily.click();}

    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    // Claim Ships
    const divArray = document.querySelector("#bs_hr_listing").getElementsByTagName("div");
    for (actualShip of divArray) {
      actualShip.click();
      await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

      // Restore Troops
      const amountSailorDiv = document.querySelector("div.army-stat-left.col-lg-6 > div:nth-child(2)");
      const amountSailor = amountSailorDiv.getElementsByTagName('p')[1].innerText.substring(0, amountSailorDiv.getElementsByTagName('p')[1].innerText.indexOf('/')-1);
      const buttonAddSailor = amountSailorDiv.getElementsByTagName("img")[0];
      if (amountSailor != 100 && buttonAddSailor != null) {
        buttonAddSailor.click(); 
        await new Promise((res) => setTimeout(res, PAUSE_MINING));
      }

      await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

      // Restore Weapons
      const amountWeaponsDiv = document.querySelector("div.army-stat-left.col-lg-6 > div:nth-child(3)");
      const amountWeapons = amountWeaponsDiv.getElementsByTagName('p')[1].innerText.substring(0, amountWeaponsDiv.getElementsByTagName('p')[1].innerText.indexOf('/')-1);
      const buttonAddWeapon = amountWeaponsDiv.getElementsByTagName("img")[0];
      if (amountWeapons != 100 && buttonAddWeapon != null) {
        buttonAddWeapon.click(); 
        await new Promise((res) => setTimeout(res, PAUSE_MINING));
      }

      await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
    }


    //
    // Manage Smithy
    //
    const menuSmithy = document.querySelector("#smithy_box_btn");
    if (menuSmithy != null) {menuSmithy.click();}

    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    // Restore Weapons
    const amountCraftedWeapons = document.querySelector("#smithy_produced").innerText;
    const buttonCraftedWeapons = document.querySelector("#smithy_progress_status");
    if (amountCraftedWeapons === 100) {
      buttonCraftedWeapons.click(); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }

    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    //
    // Manage Smithy
    //
    const menuBarrack = document.querySelector("#barrack_box_btn");
    if (menuBarrack != null) {menuBarrack.click();}

    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    // Restore Troops
    const buttonBarrackBack = document.querySelector("#hero_back_button");
    if (buttonBarrackBack != null) {
      buttonBarrackBack.click();
      await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
    }

    const amountCraftedTroops = document.querySelector("#barrack_produced").innerText;
    const buttonCraftedTroops = document.querySelector("#barrack_progress_status");
    if (amountCraftedTroops === 300) {
      buttonCraftedTroops.click(); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }

    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    // Restore Hero not implemented => Popup in Browser ._.

    //
    // Manage Farms
    //
    
  }
})();
