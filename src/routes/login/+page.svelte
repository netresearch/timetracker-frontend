<script>
	import { goto } from "$app/navigation";

    async function handleLogin(event) {
        event.preventDefault();

        const form = new FormData(event.target);
        form.append('loginCookie', 'on');

        const response = await fetch('https://tt.netresearch.de/login', {
            method: 'POST',
            body: form,
            credentials: 'include'
        });

        if (response.redirected) {
            //... check for redirect to '/' and 200
        }

        goto('/month')
    }
</script>

<form on:submit={handleLogin}>
    <label>
        Timetracker Username (AD)
        <input name="username" autocomplete="username" type="text" placeholder="username">
    </label>
    <label>
        Timetracker Password (AD)
        <input name="password" autocomplete="current-password" type="password" placeholder="password">
    </label>
    <button>Log in</button>
</form>