(async () => {
  const PAUSE_BETWEEN = 2 * 1000;
  const PAUSE_TAB = 10 * 1000;
  const PAUSE_MINING = 20 * 1000;


  while (1) {
    //
    // Manage Main-Screen
    //
    const menuLeft = document.querySelector("img[src='img/left_arrow_white.png']");
    if (menuLeft != null) {menuLeft.click();}
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
    // Manage Barrrack
    //
    const menuBarrack = document.querySelector("#barrack_box_btn");
    if (menuBarrack != null) {menuBarrack.click();}

    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    // Restore Troops
    // const buttonBarrackBack = document.querySelector("#hero_back_button");
    // if (buttonBarrackBack != null) {
    //   buttonBarrackBack.click();
    //   await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
    // }

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
    const menuRight = document.querySelector("img[src='img/right_arrow_white.png']");
    if (menuRight != null) {menuRight.click();}
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const menuFarms = document.querySelector("img[src='img/farm_button.png']");
    if (menuFarms != null) {menuFarms.click();}
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    // Mint Farms
    const firstFarm = document.querySelector("#farm_1");
    if (firstFarm != null) {
      firstFarm.click(); 
      await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
    }
    const buttonFirstFarm = document.querySelector("img[src='img/timer75.png']");
    if (buttonFirstFarm != null) {
      buttonFirstFarm.click(); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    const secondFarm = document.querySelector("#farm_2");
    if (secondFarm != null) {
      secondFarm.click(); 
      await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));
    }
    const buttonSecondFarm = document.querySelector("img[src='img/timer75.png']");
    if (buttonSecondFarm != null) {
      buttonSecondFarm.click(); 
      await new Promise((res) => setTimeout(res, PAUSE_MINING));
    }
    await new Promise((res) => setTimeout(res, PAUSE_BETWEEN));

    //TODO Mint Boats
  }
})();
