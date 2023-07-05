<script>
	import { goto } from "$app/navigation";

    const response = fetch('https://tt.netresearch.de/logout', {
        method: 'GET',
        body: null,
        //redirect: 'manual',
        credentials: 'include'
    });

    goto('/month')
</script>
